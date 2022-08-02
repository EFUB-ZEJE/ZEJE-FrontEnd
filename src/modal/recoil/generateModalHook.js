import {useRecoilState} from 'recoil';

export const generateModalHook = recoilState => {
  return () => {
    const [isModalOpen, setIsModalOpen] = useRecoilState(recoilState);
    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return {isModalOpen, openModal, closeModal};
  };
};
