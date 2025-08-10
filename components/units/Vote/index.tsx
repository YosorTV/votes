'use client';

import { FC, useState } from 'react';

import { CheckIcon } from 'lucide-react';

import Button from '@/components/elements/Button';
import Modal from '@/components/elements/Modal';
import VoteForm from '@/components/forms/VoteForm';
import cn from '@/lib/packages/cn';

type TVote = {
  className?: string;
  person: {
    name: string;
    formTitle: string;
    role: string;
    imageUrl: string;
  };
  onSuccess?: () => void;
};

const Vote: FC<TVote> = ({ person, className, onSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVoteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleVoteSuccess = () => {
    setIsModalOpen(false);
    onSuccess?.();
  };

  return (
    <>
      <Button variant='success' size='sm' onClick={handleVoteClick} className={cn(className, 'flex gap-2')}>
        Голосовать&nbsp;
        <span aria-hidden='true'>
          <CheckIcon className='size-4' />
        </span>
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={`Голосовать за ${person.formTitle}`}
        className='max-w-lg'
      >
        <VoteForm nominantName={person.name} onSuccess={handleVoteSuccess} />
      </Modal>
    </>
  );
};

export default Vote;
