import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-full sm:max-w-4xl pt-16 sm:pt-24 md:pt-32 px-4 sm:px-8 md:px-24 font-sans text-gray-800 leading-relaxed text-left">
  <h1 className="text-2xl sm:text-3xl font-bold mb-4">Prime Copy Terms And Conditions</h1>
  <p className="mb-4">
    Prime Copy (hereinafter—‘Service’) is a service that allows traders (hereinafter—‘Copiers’) to copy trades from other traders (hereinafter—‘Masters’), and can be activated by selecting ‘Start Copying’.
  </p>
  <ol className="list-decimal pl-4 sm:pl-6 mb-4">
    <li className="mb-2">
      The Copier undertakes to do the following to apply for the Service:
      <ol className="list-decimal pl-4 sm:pl-6">
        <li className="mb-1">be registered and logged in as a client on the Prime website</li>
        <li className="mb-1">add money to the Wallet</li>
        <li className="mb-1">initiate copying.</li>
      </ol>
    </li>
    <li className="mb-2">
      The Copier is entitled to do the following:
      <ol className="list-decimal pl-4 sm:pl-6">
        <li className="mb-1">copy any number of Masters (the Copier Area lists all current subscriptions)</li>
        <li className="mb-1">close any copied trade manually at any time in the Copier Area</li>
        <li className="mb-1">
          unsubscribe from the Master and stop copying the Master’s trades by clicking ‘Stop Copying’. To unsubscribe, the Copier needs to have all the trades closed. Upon unsubscription, all funds invested with the Master and the profit return to the Copier's Wallet.
        </li>
        <li className="mb-1">set the size of copy proportion for every particular Master. This option is explained in detail in sub-clause 4.4. of these Terms and Conditions</li>
        <li className="mb-1">add support funds to protect the investment from unexpected market movements. These funds are used to support Copier's trading strategy when the market fluctuates and do not influence the profit directly.</li>
      </ol>
    </li>
    <li className="mb-2">The Service is available on the Metatrader 4 platform.</li>
    <li className="mb-2">
      Opening copied trades routine:
      <ol className="list-decimal pl-4 sm:pl-6">
        <li className="mb-1">The Copier only copies the trades that were opened by the Master after the subscription for the Master within the Service.</li>
        <li className="mb-1">Stop loss/take profit orders will not be visible in the Copier Area, but if these orders are triggered on the Master’s account, the copied trades are also closed.</li>
        <li className="mb-1">Upon the subscription to a Master, the Copier specifies the amount of funds to be deducted from the Wallet and invested with the selected Master. These funds and your profit will return to your Wallet when you stop copying the Master.</li>
        <li className="mb-1">The Copier can choose to copy the Master's orders in an equal (×1), double (×2), triple (×3), or any other proportion. Copying mode, as well as the investment required for start, is selected at the time of subscription to the Master.</li>
        <li className="mb-1">The Copiers’ leverage ratio is set at 1:500. The Copiers willing to adjust it need to contact the Prime’s Customer Support.</li>
        <li className="mb-1">Once the service is activated, the trades will be copied to the Copier’s account regardless of whether the owner of the account is signed in or not.</li>
        <li className="mb-1">The Copier's order is executed following the order (Buy or Sell) made in the Master's account. When the Master places an order, the signal for opening an order triggers in the Copier's account. The Copier's order is executed at the market's price. The same mechanism triggers the order closing. Therefore, the execution prices of these orders may differ. Additionally, the number of the Copiers following this Master can affect the execution time.</li>
        <li className="mb-1">In case of significant delays in opening and closing orders due to technical reasons, the Service may cancel the Copiers' orders without prior notice.</li>
      </ol>
    </li>
    <li className="mb-2">
      Limits applied:
      <ol className="list-decimal pl-4 sm:pl-6">
        <li className="mb-1">The minimum volume of the copied trade is 0.01 lot, the maximum volume of a copied trade is 100 lots.</li>
        <li className="mb-1">The minimum copied order volume is 0.01 lots. However, copied orders with a volume below 0.005 lots will be refused, while copied trades from 0.005 lots and above will be rounded to 0.01 lots.</li>
        <li className="mb-1">The volume of any order is rounded to the nearest hundredth decimal point (the second digit after the decimal). For instance, if the Copier copies an order for 0.324 lots, the order will be rounded down to 0.32 lots. Vice versa, if the Copier copies an order for 0.325 lots, the order will be rounded up to 0.33 lots.</li>
        <li className="mb-1">If the copied trade volume is bigger than 100 lots after the calculation is made, then the trade will not be opened on the Copier account.</li>
      </ol>
    </li>
    <li className="mb-2">If the Master changes equity (by making a deposit or withdrawal) or leverage, all the copied trades maintain their initial volume on the Copier’s account.</li>
    <li className="mb-2">All trading conditions (leverage, swaps, spreads) of the Copiers’ are similar to the ones for the Prime MT4 accounts.</li>
    <li className="mb-2">The Master Account should be of Prime MT4 type.</li>
    <li className="mb-2">
      The Service is entitled to do the following:
      <ol className="list-decimal pl-4 sm:pl-6">
        <li className="mb-1">restrict the number of Master Accounts the Masters may create at any time without prior notification at its sole discretion</li>
        <li className="mb-1">unsubscribe the Copier from the Master without prior notification.</li>
        <li className="mb-1">reduce the commission set by the Master Trader and limit its maximum value for all her or his Master Accounts without prior notification or providing any explanation.</li>
        <li className="mb-1">amend these Terms and Conditions at any time without prior notice to the Copier or Master Trader. Such amendments take effect the moment they are published on the Service site in these Terms and Conditions.</li>
        <li className="mb-1">monitor the Master Trader's activity on the platform, mark the Master Trader's account with the ‘Suspicious activity’ warning if the Master Trader manipulates their statistics, and exclude such account from the Master Rating filtered by default (will keep it available for the Copiers who change their filter settings accordingly).</li>
        <li className="mb-1">amend or delete the Master's nickname and (or) user picture without prior notice if the Service reasonably suspects that such Master deliberately copies or imitates others Master’s nickname and (or) picture which may lead to dishonest representation of the Master.</li>
        <li className="mb-1">stop trading activity on the Master Account and close open orders without prior notice. The Master Trader will be able to withdraw funds from such Master Account or transfer them to another trading account and continue trading on any other trading account available.</li>
      </ol>
    </li>
    <li className="mb-2">The Master determines the commission amount for copying orders. The commission can range from 0% to 50% of the Copier's gain. Commission charges accumulated within one week are paid out to the Master's Wallet on Sundays.</li>
    <li className="mb-2">The commission amount that the Copier pays to the Master is set at the moment when the Copier presses ‘Start Copying’. If the Master changes the commission amount, it does not affect the amount due under this subscription to the Master.</li>
    <li className="mb-2">Commission amounts for the IB. The Master can also be an IB for the Copier. In this case, they will receive the IB commission with a coefficient of 0.5 and the commission for copying in full.</li>
    <li className="mb-2">
      The Service Fee
      <ol className="list-decimal pl-4 sm:pl-6">
        <li className="mb-1">The Copiers' Service Fee (here(hereinafter—'Service Fee') is included in the spread as a markup of 0.2 pips.</li>
            <li className="mb-1">The Master Traders' Service Fee is 12% of the commission the Master Trader earns from the Copiers.</li>
          </ol>
        </li>
        <li className="mb-2">
          The copy trading Bonus
          <ol className="list-decimal pl-6">
            <li className="mb-1">The Bonus amounts 50% of the funds invested at the beginning of copying the Master.</li>
            <li className="mb-1">The Bonus can only be applied once for a particular Master within the dates of the promotion.</li>
            <li className="mb-1">The Bonus cannot be applied to the ongoing investments.</li>
            <li className="mb-1">The Bonus cannot be withdrawn or considered as an integral part of the Copier’s investment.</li>
            <li className="mb-1">If the equity of the Copier’s account becomes less than the bonus size, the Bonus is cancelled.</li>
            <li className="mb-1">The Copier can cancel the Bonus manually in the Copier Area.</li>
            <li className="mb-1">The Bonus is cancelled when the Copier stops copying the Master.</li>
            <li className="mb-1">After cancellation, the Bonus cannot be applied again or reactivated.</li>
            <li className="mb-1">The Service may reject the Copier's bonus application(s) at any time without prior notification or providing reasons for such decision.</li>
            <li className="mb-1">The Service may cancel the Copier's bonus at any time without prior notification.</li>
            <li className="mb-1">If the amount of the Copier's personal funds invested with the Master Trader upon withdrawal/internal transfer becomes less than or equal to the Bonus amount, the Bonus will be cancelled.</li>
            <li className="mb-1">Any situation not described in these rules shall be subject to the Service's decision.</li>
            <li className="mb-1">The Service reserves the right to change, update, or cancel this promotion with notification in the Service news.</li>
          </ol>
        </li>
        <li className="mb-2">
          Free Trial
          <ol className="list-decimal pl-6">
            <li className="mb-1">The Master Trader can activate and disable the Free Trial at any moment.</li>
            <li className="mb-1">
              The Free Trial automatically activates when the Copier initiates copying the Master Account if:
              <ol className="list-decimal pl-6">
                <li className="mb-1">the Master Trader has the Free Trial available for this Master Account</li>
                <li className="mb-1">the Copier has not previously activated the Free Trial for this Master Account.</li>
              </ol>
            </li>
            <li className="mb-1">If the Master Trader voids the Free Trial, it continues to work for the Copiers who have already activated it.</li>
            <li className="mb-1">If the Copier stops copying the Master Account while the Free Trial is active, the Copier cannot reactivate the Free Trial for this Master Account.</li>
            <li className="mb-1">After the Free Trial expires, the Copier's subscription becomes subject to the prior conditions, including the commission amount.</li>
          </ol>
        </li>
        <li className="mb-2">The Copier’s trading statistics can only be viewed by the Copier.</li>
        <li className="mb-2">The Master’s trading statistics are available for the public.</li>
        <li className="mb-2">The Copiers do not have access to the trading terminal. All actions with their subscriptions and trades are made under the Copier Area.</li>
        <li className="mb-2">If the Service reasonably suspects that the Copier violated the Deposit and Withdrawal rules set out under the Customer Agreement or the legislation of the country of the Copier's residence, the Service is entitled to suspend providing the services to such Copier.</li>
        <li className="mb-2">Please mind that the Master can make both profitable and losing trades.</li>
      </ol>
    </div>
  );
};

export default TermsAndConditions;
