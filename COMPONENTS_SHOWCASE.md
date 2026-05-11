# SkillBridge Premium Components Showcase

## Hero Sections

### Home Hero
- **Badge**: Premium animated with pulse-glow
- **Headline**: Text-shimmer animation on "Premium Digital"
- **Background**: Floating orbs with float-rotate animation
- **CTA Buttons**: Gradient background with hover scale and glow
- **Stats**: Glass-premium cards with bounce-in staggered animation
- **Scroll Indicator**: Hover-glow with animate-bounce

### Contact Hero
- **Badge**: CTA-focused with message icon animation
- **Headline**: "Let's Start Your Premium Project" with text-shimmer
- **Info Cards**: Emoji icons with hover scale animation
- **Background**: Premium gradient with animated orbs

### Payment Hero
- **Badge**: Security-focused with lock animation
- **Headline**: "Simple & Secure Payment Portal" with gradient text
- **Trust Badges**: Icon animations with scale and glow
- **Statistics**: Premium cards showing security metrics
- **Background**: Animated gradient with floating elements

## Premium Cards

### Team Member Cards (glass-premium)
```
┌─────────────────────────────────────┐
│ ╭─ Avatar ─╮ Name (gradient-text)  │
│ │ ■■■■■■  │ Role (animate-text-shimmer) │
│ ╰──────────╯ Social Icons (hover:scale) │
│                                      │
│ Bio text with premium styling        │
│                                      │
│ Skills (glass-card badges)           │
│ ✓ Skill 1 ✓ Skill 2 ✓ Skill 3      │
│                                      │
│ [View Full Profile →]                │
│ (hover:scale-105, hover:glow-primary)│
└─────────────────────────────────────┘
```

### Service Cards (glass-card)
- Icon with rotation animation
- Category name with gradient text
- Description text
- Price with scale animation on hover
- Hover elevation with glow effect

### Pricing Cards (glass-premium)
```
Popular Plan:
┌──────────────────────────────┐
│  ⭐ MOST POPULAR ⭐          │ (bounce-in animation)
│  Plan Name                   │
│  ₹ 1,500                    │ (gradient-text)
│  per month                   │
│                              │
│  ✓ Feature 1 (fade-up)      │ (staggered)
│  ✓ Feature 2                │
│  ✓ Feature 3                │
│                              │
│ [Get Started →]              │ (hover:scale-110)
│ (glow-primary on hover)      │
└──────────────────────────────┘
```

## Form Components

### Contact Form (glass-premium)
- Section title with gradient text
- Input fields (glass-input class)
- Focus state: glow-primary + border enhancement
- Service dropdown with custom styling
- Textarea with glass-input styling
- Submit button: gradient background with hover scale and glow
- Success state: green glow with checkmark animation

### Payment Form
- Glass-input styled fields
- Secure payment indicators
- SSL badge with glow effect
- Processing animation on submit

## Navigation

### Navbar (glass-nav)
- Premium blur with directional gradient
- Logo with hover animation
- Menu items with hover:translate-x effect
- Mobile menu with glass styling
- Subtle bottom border with gradient

## Footer

### Footer Structure
```
┌────────────────────────────────────────┐
│ Brand Logo + Description               │
│ [Social Icons] (hover:scale-125)       │
│                                        │
│ Company        Services        Contact │
│ ├─ About       ├─ Web Dev      ├─ Email
│ ├─ Work        ├─ Video Edit   ├─ Phone
│ ├─ Careers     ├─ Design       └─ Location
│ └─ Blog        └─ Marketing            │
│                                        │
│ ═══════════════════════════════════    │ (gradient divider)
│ © 2026 SkillBridge. Privacy · Terms    │
│                                        │
│ ═══════════════════════════════════    │ (bottom accent line)
└────────────────────────────────────────┘
```

### Footer Animations
- Social links: hover:scale-125 + translate-y
- Links: hover:translate-x-2 with bullet point fade-in
- Divider lines: gradient with opacity fade

## Animation Sequences

### Page Load (Staggered)
```
0ms   → Badge fade-up + slide-in-down
100ms → Headline fade-up
200ms → Subheading fade-up
300ms → Hero CTA buttons fade-up (staggered)
400ms → Stats cards bounce-in (staggered)
500ms → Scroll indicator fade-up + bounce
```

### Team Grid Load
```
0ms   → Team intro badge fade-up
100ms → Section header fade-up
200ms → Team card 1 fade-up
350ms → Team card 2 fade-up
500ms → Team card 3 fade-up
650ms → Team card 4 fade-up
```

### Card Hover States
```
0ms   → scale-110
0ms   → glow-primary (opacity ramp)
50ms  → avatar scale-125 + rotate-12
100ms → info text gradient-text transition
```

## Color Application Guide

### Gold (#d4af37)
- Primary CTA buttons
- Badge accents
- Underlines and borders
- Icon highlights
- Text shimmer primary color

### Cyan (#60a5fa)
- Secondary CTAs
- Accent highlights
- Input focus states
- Service category icons
- Text shimmer secondary color

### Purple (#a78bfa)
- Tertiary accents
- Premium badges
- Gradient overlays
- Text shimmer tertiary color

### Emerald (Green)
- Success states
- Achievement indicators
- Trust badges
- Positive confirmations

## Glass Morphism Depth Layers

### Layer 1: Background (glass-nav)
- Blur: 30px
- Opacity: 0.7-0.8
- Border: rgba(212, 175, 55, 0.15)
- Usage: Navigation, fixed elements

### Layer 2: Card (glass-card)
- Blur: 25px
- Opacity: 0.8-0.9
- Border: rgba(212, 175, 55, 0.15)
- Usage: Regular cards, list items

### Layer 3: Premium (glass-premium)
- Blur: 35px
- Opacity: 0.9+
- Border: rgba(212, 175, 55, 0.25)
- Usage: Featured elements, CTA cards

### Layer 4: Input (glass-input)
- Blur: 20px
- Opacity: 0.6-0.7
- Border: rgba(212, 175, 55, 0.15)
- Usage: Form fields, search boxes

## Interactive Elements

### Buttons
- Default: glass-button with border
- Hover: scale-110 + glow effect + border enhancement
- Active: increased glow intensity
- Disabled: reduced opacity

### Links
- Default: text color muted-foreground
- Hover: gradient-text + translate-x-2
- Active: text-primary with underline glow

### Cards
- Default: glass-card or glass-premium
- Hover: scale-[1.03-1.10] + glow enhancement
- Focused: ring effect with primary color

## Responsive Adaptations

### Desktop (1920px+)
- Full animation suite
- Maximum blur effects
- All hover states active
- Full stagger sequences

### Tablet (768px-1919px)
- Reduced blur (80% of desktop)
- Simplified hover animations
- Shorter stagger delays
- Touch-friendly sizes

### Mobile (375px-767px)
- Minimal blur (50% of desktop)
- Entrance animations only
- No hover-based animations
- Larger touch targets

---

**SkillBridge Agency - Premium Components v1.0**
**All components optimized for performance and accessibility**
