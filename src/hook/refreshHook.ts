import React from 'react';

export function useRefresh(refetch: () => Promise<any>) {
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  async function onRefresh() {
    setIsRefreshing(true);

    try {
      await refetch();
    } finally {
      setIsRefreshing(false);
    }
  }

  return {
    isRefreshing,
    onRefresh,
  };
}
