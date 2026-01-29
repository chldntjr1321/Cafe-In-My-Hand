import Icons from '@/app/assets/icons';

export default function SearchBar() {
  return (
    <div className='flex w-full max-w-sm items-center justify-between gap-[8px] rounded-4xl border px-[20px] py-[10px]'>
      <input type='text' className='w-full text-xl focus:outline-none' placeholder='카페명 입력' />
      <Icons.Search className='cursor-pointer' />
    </div>
  );
}
