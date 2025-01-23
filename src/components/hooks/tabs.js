import { useState } from 'react'

export const useTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const onTabChange = (newIndex) => {
    setActiveTab(newIndex);
  }

  return {
    activeTab,
    onTabChange,
  }
}