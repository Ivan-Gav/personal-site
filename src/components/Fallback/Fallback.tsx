import Loading from '../UI/Loading/Loading';

export default function Fallback() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100svh',
      }}
    >
      <Loading />
    </div>
  );
}
