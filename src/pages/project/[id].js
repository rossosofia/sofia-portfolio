import { useRouter } from 'next/router';

function Project() {
  const router = useRouter();
  const { id } = router.query;
  
  return (
    <div>
      <h1>Project {id}</h1>
    </div>
  );
}

export default Project;