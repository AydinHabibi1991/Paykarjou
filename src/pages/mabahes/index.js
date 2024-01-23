import React from 'react'
import AsreDigital from '../../components/Subject/AsrDigital';
import GhaireEghtesad from '../../components/Subject/GhaireEghtesad';
import Iran from '../../components/Subject/Iran';
import Modern from '../../components/Subject/Modern';
import EghtesadNapazir from '../../components/Subject/EghtesadNapazir';
import AyandePajuhi from '../../components/Subject/AyandePajuhi';
import PostSection from '@/components/shared/PostSection';
import request from './../../lib/config';

function Mabahes({ posts }) {
  return (
    <div className=" mx-auto p-10 bg-secondary ">
      {posts.map((post) => (
        <PostSection key={post?.id} post={post} />
      ))}

      {/* <AsreDigital  />
    <GhaireEghtesad/>
    <Iran/>
    <Modern/>
    <EghtesadNapazir/>
    <AyandePajuhi/> */}
    </div>
  );
}
Mabahes.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Mabahes;

export const getServerSideProps = async () => {
  let posts;
  try {
    posts = await request('/post/index');
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
  console.log(posts?.data?.data);
  return {
    props: {
      posts: posts?.data?.data?.data,
    },
  };
};
