"use client";
import React from "react";
import DataCard from "../data-card/DataCard";
import useGetBiddingCompanies from "./hooks/useGetBiddingCompanies";
import useGetOfferCompanies from "./hooks/useGetOfferCompanies";
import useGetBids from "./hooks/useGetBids";
import useGetOffers from "./hooks/useGetOffers";

const AdminHeader = () => {
  const { data: BiddingCompanies } = useGetBiddingCompanies();
  const { data: OfferCompanies } = useGetOfferCompanies();
  const { data: Bids } = useGetBids();
  const { data: Offers } = useGetOffers();
  return (
    <div className="w-full flex gap-4 mt-10 px-10 flex-wrap">
      <DataCard
        color="#3B76EF"
        title="Bidding Companies"
        counter={BiddingCompanies?.companies.length ?? 0}
      />
      <DataCard
        color="#63C7FF"
        title="Offer Companies"
        counter={OfferCompanies?.companies.length ?? 0}
      />
      <DataCard
        color="#A66DD4"
        title="Biddings "
        counter={Bids?.bids.length ?? 0}
      />
      <DataCard
        color="#6DD4B1"
        title="Offers"
        counter={Offers?.offers.length ?? 0}
      />
    </div>
  );
};

export default AdminHeader;
