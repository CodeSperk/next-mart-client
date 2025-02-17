import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const CommonLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar/>
      <main className="min-h-[55vh]">
      {children}
      </main>
      <Footer/>
    </div>
  );
};

export default CommonLayout;