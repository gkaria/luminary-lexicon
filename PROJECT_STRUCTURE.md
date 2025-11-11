# Luminary Lexicon - Project Structure

## Overview

Luminary Lexicon is a curated collection of learnings from influential thinkers in technology, science, and philosophy. The project provides deep insights into their key ideas, philosophies, and contributions to innovation.

## Directory Structure

```
luminary-lexicon/
├── index.html                 # Main landing page with grid of all luminaries
├── consent.js                 # Cookie consent management for analytics
├── consent.css                # Styling for consent banner
├── README.md                  # Project overview and GitHub Pages link
├── PROJECT_STRUCTURE.md       # This file - detailed structure documentation
│
├── [luminary-name]/           # Individual directory for each thinker
│   ├── [luminary-name].html   # Main profile page with key highlights
│   ├── key_ideas.md           # Core philosophies and contributions
│   ├── notable_quotes.md      # Significant quotes and their context
│   ├── reflections.md         # Critical analysis and modern applications
│   ├── further_reading.md     # Books, articles, and resources
│   └── images/                # Images and visual content
│
├── alan-turing/
│   ├── alan-turing.html
│   ├── key_ideas.md
│   ├── notable_quotes.md
│   ├── reflections.md
│   ├── further_reading.md
│   └── images/
│
├── jensen-huang/
│   ├── jensen-huang.html
│   ├── key_ideas.md
│   ├── notable_quotes.md
│   ├── reflections.md
│   ├── further_reading.md
│   ├── first-principles-thinking.md  # Special deep dive
│   └── images/
│
├── steve-jobs/
│   ├── steve-jobs.html
│   ├── key_ideas.md
│   ├── notable_quotes.md
│   ├── reflections.md
│   ├── further_reading.md
│   └── images/
│
└── vinod-khosla/
    ├── vinod-khosla.html
    ├── key_ideas.md
    ├── notable_quotes.md
    ├── reflections.md
    ├── further_reading.md
    ├── vinod_khosla_research_report.md  # Comprehensive research
    ├── vinod_khosla_research_report.html
    └── images/
```

## File Descriptions

### Root Level Files

**index.html**
- Main landing page
- Grid layout showcasing all luminaries
- Dark/light theme toggle
- Responsive design for mobile and desktop
- Google Analytics with consent management

**consent.js / consent.css**
- Cookie consent banner implementation
- GDPR-compliant analytics consent
- Persists user preference in local storage

### Individual Luminary Structure

Each luminary follows a consistent structure with the following components:

#### **[luminary-name].html**
Main profile page featuring:
- Overview and background
- Key concepts and ideas
- Notable quotes
- Visual content (when available)
- Consistent styling with main site theme
- Back navigation to index

#### **key_ideas.md**
Comprehensive breakdown of:
- Core philosophies and beliefs
- Major contributions to their field
- Strategic frameworks and mental models
- Practical applications and lessons
- Impact on industries and society

**Target Length:** 1,500-3,000 words
**Style:** Educational, accessible, with real-world examples

#### **notable_quotes.md**
Curated collection of:
- Significant quotes organized by theme
- Context and interpretation
- Application to modern challenges
- Both famous and lesser-known insights

**Target Length:** 30-50 quotes
**Style:** Quote format with thematic grouping

#### **reflections.md**
Critical analysis including:
- Deep examination of key ideas
- Modern relevance and applications
- Critiques and counterarguments
- Lessons for different audiences (entrepreneurs, leaders, learners)
- Philosophical implications
- Legacy and open questions

**Target Length:** 2,000-4,000 words
**Style:** Analytical, thought-provoking, balanced

#### **further_reading.md**
Comprehensive resource guide:
- Essential books and biographies
- Academic papers and research
- Documentaries and video content
- Interviews and talks
- Primary sources
- Critical perspectives
- Recommended reading order for different audiences

**Target Length:** 15-30 resources with descriptions
**Style:** Annotated bibliography with "Why read/watch it" for each entry

#### **images/**
Visual content directory:
- Profile images
- Infographics
- Diagrams and charts
- Historical photos
- Memes and visual summaries

## Design Principles

### Consistent Styling
- Dark theme by default (dark blue/gray background)
- Light theme available via toggle
- Consistent color scheme across all pages
- Inter font family throughout
- Card-based layouts for content sections
- Smooth transitions and hover effects

### Responsive Design
- Mobile-first approach
- Grid layouts adapt to screen size
- Typography scales appropriately
- Touch-friendly interactive elements
- Optimized images for different viewports

### Content Philosophy
- Accessible but not dumbed down
- Balance between inspiration and critical thinking
- Include both praise and critique
- Emphasize practical applications
- Connect historical ideas to modern context
- Cite sources and provide further resources

## Technology Stack

- **Frontend:** Pure HTML5, CSS3, JavaScript (no frameworks)
- **Styling:** Custom CSS with CSS Grid and Flexbox
- **Fonts:** Google Fonts (Inter family)
- **Analytics:** Google Analytics 4 with consent management
- **Hosting:** GitHub Pages
- **Version Control:** Git

## Content Standards

### Writing Guidelines

1. **Clarity:** Write for intelligent non-experts
2. **Balance:** Show both strengths and weaknesses
3. **Context:** Connect ideas to broader themes
4. **Examples:** Use concrete examples to illustrate abstract concepts
5. **Modern Relevance:** Link historical figures to current challenges
6. **Accuracy:** Cite sources and be truthful about controversies

### Citation Standards

- Primary sources preferred when available
- Include publication dates for books/articles
- Link to online resources where possible
- Note when information is disputed or controversial
- Distinguish between direct quotes and paraphrasing

## Adding a New Luminary

To add a new thinker to the collection:

1. **Create directory:** `[luminary-name]/`
2. **Create images directory:** `[luminary-name]/images/`
3. **Create HTML page:** Following the existing template
4. **Create markdown files:**
   - key_ideas.md
   - notable_quotes.md
   - reflections.md
   - further_reading.md
5. **Add to index.html:**
   - New card in the luminary-grid
   - Include name and subtitle describing focus
6. **Test:**
   - All links work
   - Responsive design functions
   - Theme toggle works
   - Back navigation functions
7. **Commit:** Descriptive commit message

## Maintenance

### Regular Updates
- Keep further_reading.md current with new books/resources
- Update reflections.md as new developments occur
- Refresh examples in key_ideas.md to maintain relevance
- Add new quotes as they become relevant
- Update images with higher quality versions when available

### Quality Checks
- Verify all links (internal and external)
- Test responsive design on multiple devices
- Check for typos and grammatical errors
- Ensure consistent styling across pages
- Validate HTML and CSS
- Test dark/light theme functionality

## Future Enhancements

Potential improvements to consider:

- Search functionality across all content
- Tags/categories for cross-linking ideas
- Timeline view of historical figures
- Comparison features between thinkers
- Interactive visualizations
- Audio narration of key content
- Multi-language support
- RSS feed for new additions
- Social sharing features
- Reading time estimates
- Print-friendly versions

## License and Attribution

See README.md for licensing information.

All content should properly attribute sources and respect copyright. Original analysis and reflection is encouraged while being careful to cite inspiration and direct quotes.

## Contact and Contributions

For questions, suggestions, or contributions, please:
- Open an issue on GitHub
- Submit a pull request
- Follow the content and style guidelines outlined here

---

**Last Updated:** 2025-11-11
**Version:** 2.0
