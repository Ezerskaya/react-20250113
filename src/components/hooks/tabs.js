import { useState } from 'react'

export const useTabs = (initialList) => {
  const initialActiveTab = initialList?.length > 0 ? initialList[0].id : '';

  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const onTabChange = (idItem) => {
    setActiveTab(idItem);
  }

  return {
    activeTab,
    onTabChange,
  }
}