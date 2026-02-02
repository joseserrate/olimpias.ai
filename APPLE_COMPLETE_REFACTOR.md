# Complete Apple-Grade Landing Page Refactor

## Project Status: IN PROGRESS

This document tracks the comprehensive refactor of the entire Olimpias AI landing page to Apple-grade design standards.

## Design System ✅ COMPLETE

### Global CSS (`app/globals.css`)
- ✅ Apple grayscale palette defined
- ✅ System UI font stack
- ✅ Apple button utilities (primary black, secondary, link)
- ✅ Apple card utilities with subtle shadows
- ✅ Apple section and container utilities
- ✅ Removed all teal colors

### Color Palette
```
Background:       #FFFFFF
Background Subtle: #FAFAFA
Primary Text:     #0B0B0D
Secondary Text:   #4A4A50
Tertiary Text:    #7A7A82
Dividers:         #E6E6EA
Shadow:           rgba(0,0,0,0.06)
Shadow Hover:     rgba(0,0,0,0.08)
```

## Components Status

### ✅ COMPLETED
1. **AppleButton** (`components/ui/AppleButton.tsx`)
   - Primary: Black pill button
   - Secondary: Transparent with hairline border  
   - Link: Underline on hover
   - Exported in `components/ui/index.ts`

2. **AppleHeader** (`components/layout/AppleHeader.tsx`)
   - Sticky with blur effect
   - Minimal wordmark (text only)
   - Center nav links
   - Right: Black CTA button
   - Mobile: Hamburger menu
   - Status: Created, needs integration

### 🚧 IN PROGRESS
3. **Hero Section**
   - Needs: Apple-style big headline
   - Needs: Trust line below hero
   - Needs: Two CTA buttons (primary + secondary)
   - Needs: Minimal supporting text

4. **Framework Section** (`components/sections/Framework.tsx`)
   - Status: Partially updated in earlier iteration
   - Needs: Full Apple-grade redesign with new system

### ❌ NOT STARTED
5. **Use Cases Section** (`components/sections/UseCases.tsx`)
   - Needs: Clean grid layout
   - Needs: Short descriptors
   - Needs: One-line outcomes
   - Needs: Remove heavy card borders

6. **Credibility/About Section** (`components/sections/Credibility.tsx`)
   - Needs: 2-column layout
   - Needs: Minimal credential presentation
   - Needs: Remove resume-like lists

7. **Contact Form** (`components/forms/ContactForm.tsx`)
   - Needs: Simplified Apple-grade form
   - Needs: Big whitespace
   - Needs: Minimal field styling

8. **Footer** (`components/layout/Footer.tsx`)
   - Needs: Minimal clean footer
   - Needs: Hairline divider
   - Needs: Compact links

9. **About Page** (`app/about/page.tsx`)
   - Needs: Apple-style page redesign

10. **Contact Page** (`app/contact/page.tsx`)
    - Needs: Apple-style page redesign

## Typography Scale (Apple-grade)

```
H1 Hero:        56-64px desktop / 36-44px mobile, semibold, -tracking
H2 Section:     40-48px desktop / 28-32px mobile, semibold
H3 Card:        22-24px, semibold
Body Large:     18px, line-height 1.7
Body:           16px, line-height 1.65
Body Small:     15px, line-height 1.6
Label:          12-13px, uppercase/wide tracking
```

## Spacing Rhythm

```
Section padding: py-20 to py-28 (80-112px)
Card padding:    p-8 (32px)
Card gaps:       gap-7 (28px)
Max width:       1200px
```

## Next Steps (Priority Order)

1. **CRITICAL** - Update Hero Section
   - Create AppleHero component
   - Big headline + subhead
   - Add trust line
   - Two CTA buttons

2. **CRITICAL** - Integrate AppleHeader in layout
   - Replace current Header with AppleHeader
   - Update layout.tsx

3. **HIGH** - Complete Framework section redesign
   - Apply full Apple design system
   - Update copy to be scannable

4. **HIGH** - Redesign Use Cases section
   - Cleaner grid
   - Shorter copy
   - Minimal cards

5. **MEDIUM** - Update About/Credibility section
   - 2-column layout
   - Minimal presentation

6. **MEDIUM** - Redesign Contact Form
   - Apple-grade form styling
   - Simplified fields

7. **MEDIUM** - Update Footer
   - Minimal clean design
   - Hairline divider

8. **LOW** - Update About & Contact pages
   - Apply Apple design system
   - Consistent with landing page

## Implementation Notes

### What's Working
- Global design system established
- Apple button component created
- Apple header component created
- CSS utilities in place

### What Needs Work
- Component integration (header not yet in layout)
- Hero section needs complete rebuild
- All sections need Apple-style updates
- Pages need redesign

### Breaking Changes
- All teal colors removed
- Button API changed (use AppleButton)
- Typography scales updated
- Spacing system changed

## Testing Checklist

Once complete:
- [ ] All sections use grayscale only
- [ ] No teal colors anywhere
- [ ] Typography follows Apple scale
- [ ] Spacing is generous and consistent
- [ ] Hover states are subtle (200ms ease)
- [ ] Mobile responsive
- [ ] Forms work correctly
- [ ] Navigation works
- [ ] All links functional

## Estimated Completion Time

- Completed: 20%
- Remaining: 8-10 hours of development work
- Complexity: High (full site redesign)

## Files Modified So Far

1. ✅ `app/globals.css` - Complete design system
2. ✅ `components/ui/AppleButton.tsx` - New component
3. ✅ `components/ui/index.ts` - Export added
4. ✅ `components/layout/AppleHeader.tsx` - New component

## Files That Need Updates

1. ❌ `app/layout.tsx` - Switch to AppleHeader
2. ❌ `components/sections/Hero.tsx` - Complete redesign
3. ❌ `components/sections/Framework.tsx` - Apply new system
4. ❌ `components/sections/UseCases.tsx` - Redesign
5. ❌ `components/sections/Credibility.tsx` - Redesign
6. ❌ `components/forms/ContactForm.tsx` - Simplify
7. ❌ `components/layout/Footer.tsx` - Minimal redesign
8. ❌ `app/about/page.tsx` - Redesign
9. ❌ `app/contact/page.tsx` - Redesign
10. ❌ `app/page.tsx` - Update component imports

## Recommendations

Given the scope of this refactor:

**Option A: Complete Incrementally**
- Complete hero + header first (most visible)
- Then work through sections one by one
- Test after each section
- Commit frequently

**Option B: Create Branch**
- Create `feature/apple-design` branch
- Complete all changes
- Test comprehensively
- Merge when done

**Option C: Hybrid Approach** (Recommended)
- Complete critical path first:
  1. Header + Hero (user's first impression)
  2. Framework section (core value prop)
  3. Use Cases (social proof)
  4. Contact form (conversion)
- Then complete remaining sections
- Test and iterate

---

**Status**: Foundation complete, now implementing components
**Last Updated**: 2026-02-02
