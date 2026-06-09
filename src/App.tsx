import { useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { MockTestEmulator } from '@/components/MockTestEmulator'
import { Classes } from '@/components/Classes'

export default function App() {
  const [activeTab, setActiveTab] = useState('classes')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-[100dvh] w-full overflow-hidden">
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((prev) => !prev)}
      />
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-20 md:py-8 md:pt-8">
          {activeTab === 'classes' && <Classes />}
          {activeTab === 'mock-test' && <MockTestEmulator />}
        </div>
      </main>
    </div>
  )
}
