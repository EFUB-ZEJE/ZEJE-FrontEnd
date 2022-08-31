import React, {useState} from 'react';
export default function useTab(initialTap, allTabs) {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  const [currentIdx, setCurrentIdx] = useState(initialTap);
  return {
    currentItem: allTabs[currentIdx],
    changeItem: setCurrentIdx,
    currentIdx: currentIdx,
  };
}
