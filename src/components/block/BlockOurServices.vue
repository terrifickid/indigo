<template>
  <ElementHeading class="mb-24 uppercase text-center"
    >Our Services</ElementHeading
  >
  <ElementServiceLeft
    title="PHYSICAL THERAPY"
    description="Our pelvic physical therapy team will provide ongoing collaboration with our client’s entire care team of choice, including medical doctors, wellness and alternative care providers."
  />
  <ElementServiceRight
    title="Dry Needling"
    description="Dry needling is a technique, different from acupuncture which is based on meridians in the body, that has a targeted form of myofascial release."
  />
  <ElementServiceLeft
    title="Bodywork"
    description="As you adjust to healing your body during your postpartum time, fourth trimester and beyond, postpartum massage will support support your body during transitions, and healing."
  />
  <ElementServiceRight
    title="Prenatal and Postpartum Yoga"
    description="Find a home in your body, guided by highly trained yoga instructors with our expert physical therapists, and rejoin community in our small group classes."
  />
</template>
<script>
import ElementHeading from "@/components/element/ElementHeading";
import ElementServiceLeft from "@/components/element/ElementServiceLeft";
import ElementServiceRight from "@/components/element/ElementServiceRight";
export default {
  components: { ElementHeading, ElementServiceLeft, ElementServiceRight },
};
</script>
