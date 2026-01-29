import Link from 'next/link';

export default function VisitedPage() {
  return (
    <div>
      이곳은 방문한 카페를 보여주는 페이지임~
      <Link href='/' className='rounded-xl border px-[10px] py-[5px]'>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
