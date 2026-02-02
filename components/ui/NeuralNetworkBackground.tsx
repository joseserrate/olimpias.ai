'use client';

import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  activation: number; // 0-1, how "lit up" the node is
  connections: number[]; // indices of connected nodes
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number; // 0-1
  speed: number;
}

export const NeuralNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const pulsesRef = useRef<Pulse[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return () => {};

    const ctx = canvas.getContext('2d');
    if (!ctx) return () => {};

    // Set canvas size
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      // Reinitialize nodes when size changes
      initializeNetwork();
    };

    // Initialize network structure
    const initializeNetwork = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const nodeCount = 30;
      const nodes: Node[] = [];

      // Create nodes in a grid-like pattern with some randomness
      const cols = 5;
      const rows = Math.ceil(nodeCount / cols);
      const xSpacing = width / (cols + 1);
      const ySpacing = height / (rows + 1);

      for (let i = 0; i < nodeCount; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        
        nodes.push({
          x: xSpacing * (col + 1) + (Math.random() - 0.5) * xSpacing * 0.4,
          y: ySpacing * (row + 1) + (Math.random() - 0.5) * ySpacing * 0.4,
          activation: Math.random() * 0.3, // Start with low activation
          connections: []
        });
      }

      // Create connections between nearby nodes
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i >= j) return;
          
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Connect nodes that are close enough
          if (distance < width * 0.25) {
            node.connections.push(j);
            otherNode.connections.push(i);
          }
        });
      });

      nodesRef.current = nodes;
      pulsesRef.current = [];
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Create pulses periodically
    const createPulse = () => {
      const nodes = nodesRef.current;
      if (nodes.length === 0) return;

      // Pick a random starting node
      const startNode = Math.floor(Math.random() * nodes.length);
      const connections = nodes[startNode].connections;
      
      if (connections.length > 0) {
        const targetNode = connections[Math.floor(Math.random() * connections.length)];
        
        pulsesRef.current.push({
          fromNode: startNode,
          toNode: targetNode,
          progress: 0,
          speed: 0.01 + Math.random() * 0.02 // Varying speeds
        });

        // Activate the starting node
        nodes[startNode].activation = 1;
      }
    };

    // Create initial pulses and set interval for new ones
    const pulseInterval = setInterval(createPulse, 200);
    for (let i = 0; i < 5; i++) {
      setTimeout(createPulse, i * 100);
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const nodes = nodesRef.current;
      const pulses = pulsesRef.current;

      // Clear canvas
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.fillRect(0, 0, width, height);

      // Decay all node activations
      nodes.forEach(node => {
        node.activation *= 0.95;
      });

      // Draw connections (inactive state)
      nodes.forEach((node, i) => {
        node.connections.forEach(targetIdx => {
          if (i < targetIdx) { // Draw each connection only once
            const target = nodes[targetIdx];
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = 'rgba(147, 51, 234, 0.1)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Update and draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          // Pulse reached destination
          nodes[pulse.toNode].activation = 1;
          pulses.splice(i, 1);
          
          // Chain reaction: create new pulses from this node
          if (Math.random() > 0.3) {
            const connections = nodes[pulse.toNode].connections;
            if (connections.length > 0) {
              const nextTarget = connections[Math.floor(Math.random() * connections.length)];
              pulses.push({
                fromNode: pulse.toNode,
                toNode: nextTarget,
                progress: 0,
                speed: 0.01 + Math.random() * 0.02
              });
            }
          }
        } else {
          // Draw active connection with pulse
          const from = nodes[pulse.fromNode];
          const to = nodes[pulse.toNode];
          
          // Draw lit-up connection
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.strokeStyle = `rgba(147, 51, 234, ${0.6 * (1 - pulse.progress * 0.5)})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Draw pulse point
          const pulseX = from.x + (to.x - from.x) * pulse.progress;
          const pulseY = from.y + (to.y - from.y) * pulse.progress;
          
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(147, 51, 234, 1)';
          ctx.fill();
          
          // Glow effect
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(147, 51, 234, 0.3)';
          ctx.fill();
        }
      }

      // Draw nodes with activation
      nodes.forEach(node => {
        // Node glow when activated
        if (node.activation > 0.1) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 8 * node.activation, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(147, 51, 234, ${0.2 * node.activation})`;
          ctx.fill();
        }

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2 + node.activation * 2, 0, Math.PI * 2);
        const brightness = 0.3 + node.activation * 0.7;
        ctx.fillStyle = `rgba(${147 * brightness}, ${51 * brightness}, ${234 * brightness}, ${0.6 + node.activation * 0.4})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      clearInterval(pulseInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute right-0 top-0 bottom-0 w-[50%] md:w-[40%] overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};
