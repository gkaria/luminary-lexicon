# New Luminary Template

This directory contains a complete template for adding a new luminary to the Luminary Lexicon.

## Quick Start

1. **Copy this entire directory** and rename it to `[luminary-name]/` (use lowercase with hyphens)
   ```bash
   cp -r _template-luminary/ firstname-lastname/
   ```

2. **Replace all placeholders** in the files:
   - `[LUMINARY_NAME]` → Actual name (e.g., "Elon Musk")
   - `[LUMINARY_SUBTITLE]` → One-line description (e.g., "First Principles & Mars Mission")
   - `[luminary-name]` → Directory/file name (e.g., "elon-musk")
   - `[DESCRIPTION]` → SEO-friendly description
   - `[KEYWORDS]` → Comma-separated keywords

3. **Fill in content** in each markdown file:
   - `key_ideas.md` - Core philosophies and frameworks
   - `notable_quotes.md` - Curated quotes organized by theme
   - `reflections.md` - Critical analysis and modern applications
   - `further_reading.md` - Comprehensive resource list

4. **Add to index.html**:
   ```javascript
   // Add to luminaries array in index.html
   {
       name: "[LUMINARY_NAME]",
       subtitle: "[LUMINARY_SUBTITLE]",
       url: "[luminary-name]/[luminary-name].html",
       keywords: ["keyword1", "keyword2", ...]
   }
   ```

5. **Update sitemap.xml**:
   ```xml
   <url>
       <loc>https://gkaria.github.io/luminary-lexicon/[luminary-name]/[luminary-name].html</loc>
       <lastmod>YYYY-MM-DD</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
   </url>
   ```

6. **Add images** to the `images/` directory

7. **Test locally** before committing

## Content Guidelines

### key_ideas.md (1,500-3,000 words)
- Core philosophies and beliefs
- Major contributions to their field
- Strategic frameworks and mental models
- Practical applications and lessons
- Impact on industries and society

### notable_quotes.md (30-50 quotes)
- Organized by theme
- Include context where relevant
- Mix famous and lesser-known insights
- Use blockquote format for longer quotes

### reflections.md (2,000-4,000 words)
- Deep examination of key ideas
- Modern relevance and applications
- Critiques and counterarguments
- Lessons for different audiences
- Philosophical implications
- Legacy and open questions

### further_reading.md (15-30 resources)
- Essential books and biographies
- Academic papers and research
- Documentaries and video content
- Interviews and talks
- Primary sources
- Critical perspectives
- Recommended reading order

## Style Guide

- **Tone**: Educational, accessible, balanced
- **Perspective**: Third-person, objective
- **Citations**: Include when referencing specific works
- **Examples**: Use concrete examples to illustrate abstract concepts
- **Balance**: Show both strengths and limitations
- **Relevance**: Connect historical ideas to modern challenges

## HTML Customization

The template HTML includes:
- Responsive design
- Dark/light theme support
- SEO meta tags (customize these!)
- Open Graph tags for social sharing
- Consistent styling with main site

Modify the content sections while maintaining the overall structure and styling.

## Commit Message Format

```
Add [Luminary Name] profile

- Created comprehensive profile for [Name]
- Added key_ideas, quotes, reflections, and further reading
- Integrated search keywords and SEO optimization
- Added to site navigation and sitemap
```

## Questions?

Refer to `PROJECT_STRUCTURE.md` in the root directory for detailed documentation.
