import notFound from '../../images/404.png';

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFound} alt="404"/>
      <p>It's quite slient here...</p>
    </div>
  );
};
export default NotFound; 