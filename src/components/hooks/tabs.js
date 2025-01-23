import { useState } from 'react'

export const useTabs = (listRestaurants) => {
  const activeTabId = listRestaurants?.length > 0 ? listRestaurants[0].id : '';

  const [activeTab, setActiveTab] = useState(activeTabId);

  const onTabChange = (idItem) => {
    setActiveTab(idItem);
  }

  return {
    activeTab,
    onTabChange,
  }
}