const ApiError = ({ error }: { error: Record<string, any> }) => {
  return (
    <div className="my-2">
      {error?.data?.errorMessages &&
        error?.data?.errorMessages?.map((err: Record<string, any>) => (
          <small className="text-passion" key={err.path}>
            {err.message}
            <br />
          </small>
        ))}
    </div>
  );
};

export default ApiError;
