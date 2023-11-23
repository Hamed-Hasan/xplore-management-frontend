const Title = ({ title, top }: { title: string; top: string }) => {
  return (
    <div className="my-10 text-center">
      <p className="text-secondary text-lg">{top}</p>
      <h2 className="text-3xl text-primary font-bold font-mono">{title}</h2>
    </div>
  );
};

export default Title;
