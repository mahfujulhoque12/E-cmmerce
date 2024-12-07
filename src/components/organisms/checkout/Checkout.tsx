import CardTitle from "@/components/atoms/CardTitle";
import CustomerInfo from "@/components/molecules/checkout/CustomerInfo";
import PaymentMethod from "@/components/molecules/checkout/PaymentMethod";
import DelevaryMethod from "@/components/molecules/checkout/DelevaryMethod";
import Gitf from "@/components/molecules/checkout/Gitf";
import Cuppon from "@/components/molecules/checkout/Cuppon";
import OrderOverview from './../../molecules/checkout/OrderOverview';
import ConfirmOrder from "@/components/molecules/checkout/ConfirmOrder";
const Checkout = () => {
  return (
    <div>
      <CardTitle className="font-semibold lg:text-2xl">Checkout</CardTitle>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="basis-full  md:basis-[33%]">
          <CustomerInfo />
        </div>
        <div className="basis-full md:basis-[62%]">
            {/* delevary and payment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <PaymentMethod />
            </div>

            <div>
              <DelevaryMethod />
            </div>
          </div>
        {/* delevary and payment */}
        
        {/* gift  */}
        <div className="grid mt-5 grid-cols-1 gap-4 md:grid-cols-2 p-4 shadow-sm rounded-md border">
            <div>
                <Gitf/>
            </div>
            <div>
                <Cuppon/>
            </div>

        </div>
        {/* gift  */}

        <OrderOverview/>
 
        </div>
    
      </div>
      
      <ConfirmOrder/>
    </div>
  );
};

export default Checkout;
