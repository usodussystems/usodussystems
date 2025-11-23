import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useTranslation } from '../../lib/i18n';
import { motion } from 'motion/react';

export const NewsSection: React.FC = () => {
  const { t } = useTranslation();

  // Mock news data
  const newsItems = [
    {
      id: 1,
      title: 'Usodus Launches Revolutionary Platform Framework',
      excerpt: 'Our new framework reduces development time by 60% while maintaining enterprise-grade security and scalability.',
      category: 'Product',
      date: '2024-11-15',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Digital Transformation: Key Trends for 2025',
      excerpt: 'Explore the emerging trends shaping the future of digital transformation and how businesses can prepare.',
      category: 'Insights',
      date: '2024-11-10',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Case Study: Enterprise Migration Success',
      excerpt: 'How we helped a Fortune 500 company migrate their legacy systems to a modern cloud-native architecture.',
      category: 'Case Study',
      date: '2024-11-05',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    },
  ];

  const categoryColors: Record<string, string> = {
    'Product': 'bg-brand-purple/20 text-brand-purple border-brand-purple/30',
    'Insights': 'bg-brand-teal/20 text-brand-teal border-brand-teal/30',
    'Case Study': 'bg-brand-orange/20 text-brand-orange border-brand-orange/30',
  };

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.nav.news} & Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest trends, case studies, and insights from the world of digital transformation.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={categoryColors[item.category]}>
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="line-clamp-3">
                    {item.excerpt}
                  </CardDescription>
                  <Button variant="ghost" className="group/btn p-0 h-auto">
                    <span className="mr-2">Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg" className="gap-2">
            View All News
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
