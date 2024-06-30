import * as C from '@/components/index'; 

const Tables = () => {
  return (
    <>
      <C.Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <C.TableThree />
        <C.TableOne />
        <C.TableTwo />
      </div>
    </>
  );
};

export default Tables;
