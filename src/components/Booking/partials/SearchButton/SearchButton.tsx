import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';
import { useRouter } from 'next/router';

const SearchButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/result');
  };
  return (
    <Button
      onClick={handleClick}
      className="rounded-[32px] h-12 w-[146px] bg-[#20272c] text-[white]"
    >
      Search
    </Button>
  );
};

export default SearchButton;
