import Image from 'next/image';

const SectionDraft: React.FC = () => {
  return (
    <div className="relative w-full">
      <Image
        alt=""
        width={0}
        height={0}
        src={require('../../../../../public/images/pics/Section.png')}
      />
    </div>
  );
};

export default SectionDraft;
