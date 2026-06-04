import { useState } from 'react'
import { Card, Button, Badge, IconBadge } from '@/components/ui'
import { grammarBankData, type GrammarTopic } from '@/data/grammarBank'
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  PenLine,
  Target,
  FileSignature,
  Search
} from 'lucide-react'

export function Classes() {
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic | null>(null)

  // Reader View
  if (selectedTopic) {
    return (
      <div className="animate-fade-in max-w-4xl mx-auto pb-20">
        <Button 
          variant="ghost" 
          onClick={() => setSelectedTopic(null)} 
          className="mb-6 -ml-2 text-text-muted hover:text-text-primary"
        >
          <ChevronLeft size={20} className="mr-1" /> Back to Modules
        </Button>

        <article className="bg-surface-0 border border-border-default rounded-2xl overflow-hidden shadow-sm">
          {/* Header */}
          <header className="px-8 py-10 bg-surface-1 border-b border-border-default">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="outline" size="sm" className="bg-primary-muted/20 border-primary-500/30 text-primary-400">
                <PenLine size={14} className="mr-1.5" />
                Applied Grammar
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight leading-tight mb-4">
              {selectedTopic.title}
            </h1>
          </header>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* IFSP Focus */}
            <div className="bg-warning-muted/20 border border-warning-500/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3 text-warning-500 font-bold">
                <Target size={20} />
                <h2>How IFSP Tests This</h2>
              </div>
              <p className="text-text-secondary leading-relaxed text-[15px]">
                {selectedTopic.ifspFocus}
              </p>
            </div>

            {/* Theory */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-primary-400" />
                Grammar Rules & Theory
              </h2>
              <div 
                className="prose prose-invert prose-p:text-text-secondary prose-p:leading-relaxed prose-li:text-text-secondary prose-h3:text-lg prose-h3:font-bold prose-h3:text-text-primary prose-strong:text-text-primary max-w-none text-[15px]"
                dangerouslySetInnerHTML={{ __html: selectedTopic.theory }} 
              />
            </div>

            {/* Mock Test Excerpt */}
            <div className="border-t border-border-subtle pt-10">
              <h2 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                <FileSignature size={20} className="text-primary-400" />
                From the Mock Test (Text: {selectedTopic.textId})
              </h2>
              
              <div className="bg-surface-2 border-l-4 border-primary-500 p-6 rounded-r-xl mb-6 shadow-sm">
                <p className="text-lg font-medium italic text-text-primary leading-relaxed">
                  {selectedTopic.textExcerpt}
                </p>
              </div>

              <div className="bg-primary-muted/10 border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3 text-primary-400 font-bold">
                  <Search size={18} />
                  <h3>Structural Analysis</h3>
                </div>
                <div 
                  className="prose prose-invert prose-p:text-text-secondary prose-p:leading-relaxed prose-strong:text-text-primary max-w-none text-[15px]"
                  dangerouslySetInnerHTML={{ __html: selectedTopic.analysis }} 
                />
              </div>
            </div>

          </div>
        </article>
      </div>
    )
  }

  // List View
  return (
    <div className="animate-fade-in pb-20">
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <IconBadge icon={<PenLine size={24} />} color="primary" size="md" />
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Applied Grammar</h1>
        </div>
        <p className="text-lg text-text-muted max-w-2xl">
          Grammar rules explained through the actual texts from the IFSP EBTT Mock Test. Learn how the exam board tests these structures in an academic context.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {grammarBankData.map((topic) => (
          <Card 
            key={topic.id} 
            className="group cursor-pointer hover:border-primary-400 transition-all duration-300"
            onClick={() => setSelectedTopic(topic)}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border-default flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <BookOpen size={20} />
                </div>
                <Badge variant="outline" size="sm" className="bg-surface-2">
                  Text: {topic.textId}
                </Badge>
              </div>
              
              <h2 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary-500 transition-colors">
                {topic.title}
              </h2>
              
              <div className="bg-surface-2 rounded-lg p-3 mb-6">
                <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                  <span className="font-bold text-text-muted">IFSP Focus:</span> {topic.ifspFocus}
                </p>
              </div>

              <div className="flex items-center text-sm font-bold text-primary-500 group-hover:translate-x-1 transition-transform">
                Study Module <ChevronRight size={16} className="ml-1" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
