interface PageTitleProps {
  title: string;
  description: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">{title}</h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
