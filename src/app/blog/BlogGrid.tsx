'use client';

import * as React from 'react';
import Link from 'next/link';
import { Search, Clock, Calendar, ChevronRight, Tag } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
}

const posts: BlogPost[] = [
  { slug: 'building-scalable-saas-nextjs', title: 'Building Scalable SaaS Products with Next.js: A 2025 Playbook', excerpt: 'Learn how to architect, build, and scale a SaaS product using Next.js 16, React 19, and modern edge infrastructure.', category: 'Engineering', author: 'Ayeshkant Reinvity', authorRole: 'Founder', date: 'Jun 12, 2026', readTime: '8 min read', image: '' },
  { slug: 'ai-integration-strategies-enterprise', title: 'AI Integration Strategies for Enterprise Applications', excerpt: 'A practical guide to integrating LLMs, RAG pipelines, and AI agents into existing enterprise systems.', category: 'AI', author: 'Ayeshkant Reinvity', authorRole: 'Founder', date: 'Jun 5, 2026', readTime: '12 min read', image: '' },
  { slug: 'ui-ux-trends-2026', title: 'UI/UX Design Trends Defining 2026', excerpt: 'From micro-interactions to AI-driven personalization — the design patterns shaping modern web experiences.', category: 'Design', author: 'Ayeshkant Reinvity', authorRole: 'Founder', date: 'May 28, 2026', readTime: '6 min read', image: '' },
  { slug: 'nextjs-v16-whats-new', title: 'Next.js 16: Everything You Need to Know', excerpt: 'A deep dive into the new features, performance improvements, and breaking changes in Next.js 16.', category: 'Engineering', author: 'Ayeshkant Reinvity', authorRole: 'Founder', date: 'May 20, 2026', readTime: '10 min read', image: '' },
  { slug: 'startup-mvp-cost-guide', title: 'How Much Does It Cost to Build an MVP in 2026?', excerpt: 'A transparent breakdown of MVP development costs, timelines, and what factors influence your budget.', category: 'Business', author: 'Ayeshkant Reinvity', authorRole: 'Founder', date: 'May 14, 2026', readTime: '7 min read', image: '' },
  { slug: 'react-server-components-practical', title: 'React Server Components: A Practical Guide', excerpt: 'Understanding RSC architecture, when to use client vs server components, and real-world performance gains.', category: 'Engineering', author: 'Ayeshkant Reinvity', authorRole: 'Founder', date: 'May 8, 2026', readTime: '9 min read', image: '' },
  { slug: 'digital-transformation-roadmap', title: 'A 6-Month Digital Transformation Roadmap for Mid-Size Companies', excerpt: 'A phased approach to modernizing your technology stack, team structure, and delivery processes.', category: 'Business', author: 'Ayeshkant Reinvity', authorRole: 'Founder', date: 'May 1, 2026', readTime: '11 min read', image: '' },
  { slug: 'web-accessibility-standards', title: 'Web Accessibility: Beyond Compliance to Great UX', excerpt: 'Why accessibility matters for every user, practical implementation tips, and tools to audit your site.', category: 'Design', author: 'Ayeshkant Reinvity', authorRole: 'Founder', date: 'Apr 24, 2026', readTime: '6 min read', image: '' },
  { slug: 'choosing-tech-stack-2026', title: 'How to Choose Your Tech Stack in 2026', excerpt: 'A decision framework for evaluating frameworks, databases, hosting, and third-party services.', category: 'Engineering', author: 'Ayeshkant Reinvity', authorRole: 'Founder', date: 'Apr 18, 2026', readTime: '8 min read', image: '' },
];

const categories = ['All', 'Engineering', 'AI', 'Design', 'Business'];
const PER_PAGE = 6;

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [page, setPage] = React.useState(1);

  const filtered = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q) || post.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  React.useEffect(() => {
    setPage(1);
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Filter bar */}
      <section className="pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-border">
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === activeCategory
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-surface text-muted-foreground hover:text-foreground border border-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-9 pr-4 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {paginated.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No articles found. Try a different filter or search term.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginated.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all duration-300"
                  >
                    <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-primary/[0.03] to-transparent flex items-center justify-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300">
                        <Tag className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                            {post.author.split(' ').map(w => w[0]).join('')}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-foreground">{post.author}</p>
                            <p className="text-xs text-muted-foreground">{post.authorRole}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        p === safePage
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-surface text-muted-foreground hover:text-foreground border border-border'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  {safePage < totalPages && (
                    <button
                      onClick={() => setPage(safePage + 1)}
                      className="flex items-center gap-1 px-4 py-2 rounded-lg bg-surface text-muted-foreground hover:text-foreground border border-border text-sm font-medium transition-colors"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
