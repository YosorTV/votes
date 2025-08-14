'use client';

import { FC, useState } from 'react';

import { CheckIcon } from 'lucide-react';

import Button from '@/components/elements/Button';
import Modal from '@/components/elements/Modal';
import VerificationForm from '@/components/forms/VerificationForm';
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
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

  const handleVoteClick = () => {
    setIsVoteModalOpen(true);
  };

  const handleCloseVoteModal = () => {
    setIsVoteModalOpen(false);
  };

  const handleCloseVerificationModal = () => {
    setIsVerificationModalOpen(false);
  };

  const handleVoteSuccess = () => {
    setIsVoteModalOpen(false);
    setIsVerificationModalOpen(true);
  };

  const handleVerificationSuccess = () => {
    setIsVerificationModalOpen(false);
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
        isOpen={isVoteModalOpen}
        onClose={handleCloseVoteModal}
        title={`Голосовать за ${person.formTitle}`}
        className='max-w-lg'
      >
        <VoteForm nominantName={person.name} onSuccess={handleVoteSuccess} />
      </Modal>

      <Modal
        isOpen={isVerificationModalOpen}
        onClose={handleCloseVerificationModal}
        title='Подтверждение голоса'
        className='max-w-lg'
      >
        <VerificationForm onSuccess={handleVerificationSuccess} />
      </Modal>
    </>
  );
};

export default Vote;
