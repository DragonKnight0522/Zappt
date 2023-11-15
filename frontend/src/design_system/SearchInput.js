import React from "react";
import { MDropdown } from "./MDropdown";
// import Form from "react-bootstrap/Form";

import {
  ambiance,
  games,
  levelOfMixology,
  costOfCans,
  costOfDrinks,
  sports,
  offersFood,
  events,
  close2Others,
  happyHour,
  dancing,
  barMusic,
  typesOfSports,
  dogFriendly,
  amenities,
  parking,
  drinkSpecialties,
  neighborhood,
  time2visit,
} from "../layout/Food/DrowndownList";

import { SearchFieldsWrapper } from "./styled-components";
// import { isEmpty } from "../utils/util";

export const SearchInput = ({ formData, setFormData, tableData, isEdit }) => {
  // const [isShowHappyHour, setShowHappyHour] = useState(false);
  // const [isShowTypesOfSports, setShowTypesOfSports] = useState(false);

  // useEffect(() => {
  //   setShowHappyHour(!isEmpty(tableData?.happyHour));
  //   setShowTypesOfSports(!isEmpty(tableData?.typesOfSports));
  // }, [tableData]);

  return (
    <>
      <SearchFieldsWrapper>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={ambiance}
            attribute="ambiance"
            label="Ambiance"
            editData={tableData?.ambiance || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={games}
            attribute="games"
            label="Games"
            editData={tableData?.games || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={levelOfMixology}
            attribute="mixology"
            label="Mixology"
            editData={tableData?.mixology || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={costOfCans}
            attribute="beerCost"
            label="Beer Cost"
            editData={tableData?.beerCost || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={costOfDrinks}
            attribute="drinkCost"
            label="Drink Cost"
            editData={tableData?.drinkCost || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={sports}
            attribute="sports"
            label="Sports Watching"
            editData={tableData?.sports || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div className="d-flex align-items-center">
          {/* <Form.Check
            className="cursor-pointer"
            type="switch"
            id={"sports-watching-switch-" + formData?.id}
            label="Types of Sports"
            checked={isShowTypesOfSports}
            onChange={(e) => setShowTypesOfSports(e.target.checked)}
          /> */}
          {/* {isShowTypesOfSports && ( */}
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={typesOfSports}
            attribute="typesOfSports"
            label="Types of Sports"
            editData={tableData?.typesOfSports || []}
            isEdit={isEdit}
            isMulti={true}
          />
          {/* )} */}
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={offersFood}
            attribute="offersFood"
            label="Offers Food"
            editData={tableData?.offersFood || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={events}
            attribute="events"
            label="Events"
            editData={tableData?.events || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={close2Others}
            attribute="close2Others"
            label="Close to Other bars"
            editData={tableData?.close2Others || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div className="d-flex align-items-center">
          {/* <Form.Check
            className="cursor-pointer"
            type="switch"
            id={"custom-switch-" + formData?.id}
            label="Happy Hour"
            checked={isShowHappyHour}
            onChange={(e) => setShowHappyHour(e.target.checked)}
          /> */}
          {/* {isShowHappyHour && ( */}
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={happyHour}
            attribute="happyHour"
            label="Happy Hour"
            editData={tableData?.happyHour || []}
            isEdit={isEdit}
            isMulti={true}
          />
          {/* )} */}
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={dancing}
            attribute="dancing"
            label="Dancing"
            editData={tableData?.dancing || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div className="d-flex align-items-center">
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={barMusic}
            attribute="barMusic"
            label="Bar Music"
            editData={tableData?.barMusic || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={dogFriendly}
            attribute="dogFriendly"
            label="Dog Friendly"
            editData={tableData?.dogFriendly || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={amenities}
            attribute="amenities"
            label="Amenities"
            editData={tableData?.amenities || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={parking}
            attribute="parking"
            label="Parking"
            editData={tableData?.parking || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={neighborhood}
            attribute="neighborhood"
            label="Neighborhood"
            editData={tableData?.neighborhood || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={drinkSpecialties}
            attribute="drinkSpecialties"
            label="Drink Specialties"
            editData={tableData?.drinkSpecialties || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
        <div>
          <MDropdown
            className="dropdown"
            formData={formData}
            setFormData={setFormData}
            listItems={time2visit}
            attribute="time2visit"
            label="Best Time to Visit"
            editData={tableData?.time2visit || []}
            isEdit={isEdit}
            isMulti={true}
          />
        </div>
      </SearchFieldsWrapper>
    </>
  );
};
