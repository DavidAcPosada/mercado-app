import { useState } from 'react';

const useToolbarLayoutController = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);

  const handleOpenMenu = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  return { anchorEl, handleOpenMenu, handleCloseMenu };
};

export default useToolbarLayoutController;
