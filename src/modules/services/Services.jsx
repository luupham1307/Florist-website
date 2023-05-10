import React from "react";
import Container from "../../common/components/Container";
import ServicesDetail from "./ServicesDetail";
import ServiceType from "../../common/components/ServiceType";

export default function Services() {
 

  return (
    <div className="py-10 lg:py-24 max-w-[1140px] mx-auto">
      <Container>
        <div className="lg:flex">
          {/* Servivce type */}
          <ServiceType/>

          {/* Service detail */}
          <ServicesDetail />
        </div>
      </Container>
    </div>
  );
}
