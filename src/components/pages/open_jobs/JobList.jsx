import React, { useState, useEffect } from "react";
import SearchBar from "../../common/SearchBar";
import JobListing from "./JobListing";

const JobList = ({
  data,
  jobs,
  cities,
  types,
  cats,
  searchJobs,
  degree_req,
  isSearching,
  saveJob,
  isJobSaving
}) => {
  const [active, setActive] = useState(false);
  const [sortBy, setSortBy] = useState("desc");
  const [jobCats, setJobCats] = useState({});
  const [jobRequirements, setJobRequirements] = useState({});
  const [citiesFilter, setCitiesFilter] = useState({});
  const [tpyesFilter, settypesFilter] = useState({});
  const [visaAcceptance, setVisaAcceptance] = useState(false);
  const toggleFilter = () => {
    setActive(!active);
  };

  const handleJobCatsChange = (event) => {
    setJobCats({
      ...jobCats,
      [event.target.id]: event.target.checked
    });
  };

  const handleDegreeRequirementChange = (event) => {
    setJobRequirements({
      ...jobRequirements,
      [event.target.id]: event.target.checked
    });
  };

  const handleCityChange = (event) => {
    setCitiesFilter({
      ...citiesFilter,
      [event.target.id]: event.target.checked
    });
  };

  const handleTypesChange = (event) => {
    settypesFilter({
      ...tpyesFilter,
      [event.target.id]: event.target.checked
    });
  };

  useEffect(() => {
    let jobCatsArr = [];
    for (let key in jobCats) {
      if (jobCats[key]) jobCatsArr.push(parseInt(key));
    }

    let citiesFilterArr = [];
    for (let key in citiesFilter) {
      if (citiesFilter[key]) citiesFilterArr.push(key.toString());
    }

    let tpyesFilterArr = [];
    for (let key in tpyesFilter) {
      if (tpyesFilter[key]) tpyesFilterArr.push(key.toString());
    }

    let degreeRequirementsArr = [];
    for (let key in jobRequirements) {
      if (jobRequirements[key]) degreeRequirementsArr.push(key.toString());
    }

    let filters = {
      sortBy: sortBy,
      jobCats: jobCatsArr,
      cities: citiesFilterArr,
      types: tpyesFilterArr,
      jobRequirements: degreeRequirementsArr,
      visaAcceptance: visaAcceptance
    };
    // console.log(filters);
    searchJobs(filters);
  }, [
    sortBy,
    jobCats,
    citiesFilter,
    tpyesFilter,
    visaAcceptance,
    jobRequirements
  ]);

  return (
    <>
      <section id="open_jobs">
        <div className="top_blk">
          <div className="contain">
            <SearchBar />
          </div>
        </div>
        <div className="contain">
          <div className="flex_row main_row row">
            <div className="col-xl-4 filter_wrapper_col">
              <div id="filter" className={active ? "blk active" : "blk"}>
                <button
                  type="button"
                  className="x_btn"
                  onClick={toggleFilter}
                ></button>
                <div className="top_head mb-0">
                  <h4 className="mb-0 text-uppercase">Filter Jobs</h4>
                </div>
                <div className="in_blk">
                  <h6>Degree Requirement</h6>
                  <ul className="ctg_lst">
                    {degree_req.map((dr, key) => (
                      <li key={key}>
                        <label>
                          <input
                            type="checkbox"
                            value={dr.type}
                            id={dr.type}
                            name="degree_req"
                            onChange={handleDegreeRequirementChange}
                            checked={jobRequirements[dr.type]}
                          />
                          {dr.type}
                          <span>({dr.count})</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="in_blk">
                  <h6>Location</h6>
                  <ul className="ctg_lst">
                    {cities.map((city, key) => (
                      <li key={key}>
                        <label>
                          <input
                            type="checkbox"
                            value={city.city}
                            id={city.city}
                            name="city"
                            onChange={handleCityChange}
                            checked={citiesFilter[city.city]}
                          />
                          {city.city} <span>({city.count})</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="in_blk">
                  <h6>Job Industry</h6>
                  <ul className="ctg_lst">
                    {cats.map((cat, key) => (
                      <li key={key}>
                        <label>
                          <input
                            type="checkbox"
                            value={cat.id}
                            id={cat.id}
                            name="job_cat"
                            onChange={handleJobCatsChange}
                            checked={jobCats[cat.id]}
                          />
                          {cat.title} <span>({cat.count})</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="in_blk">
                  <h6>Job Type</h6>
                  <ul className="ctg_lst">
                    {types.map((type, key) => (
                      <li key={key}>
                        <label>
                          <input
                            type="checkbox"
                            value={type.type}
                            id={type.type}
                            name="job_type"
                            onChange={handleTypesChange}
                            checked={tpyesFilter[type.type]}
                          />
                          {type.type} <span>({type.count})</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="in_blk">
                  <h6>Visa Acceptance</h6>
                  <ul className="ctg_lst">
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          name="visa_acceptance"
                          onClick={() => setVisaAcceptance(!visaAcceptance)}
                          checked={visaAcceptance}
                        />
                        Accept Graduate Visa Holders
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="in_blk">
                  <h6>Salary Expectation</h6>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="top_head">
                <div className="txt">
                  <h3>{data.heading}</h3>
                  <p>
                    {jobs.length == 0
                      ? "0 record."
                      : jobs.length + " record(s) found."}
                  </p>
                </div>
                <div className="btn_blk">
                  <select
                    name="sort_by"
                    value={sortBy}
                    className="input"
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="desc">Newest Listings</option>
                    <option value="asc">Oldest Listings</option>
                  </select>
                </div>
              </div>
              <JobListing
                listing={data.jobs}
                jobs={jobs}
                isSearching={isSearching}
                saveJob={saveJob}
                isJobSaving={isJobSaving}
              />
            </div>
          </div>
          <div id="filter_btn_blk" className="btn_blk">
            <button
              type="button"
              id="filter_btn"
              className="site_btn auto"
              onClick={toggleFilter}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/icon-slider.svg"}
                alt=""
              />
              View Filters
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobList;
