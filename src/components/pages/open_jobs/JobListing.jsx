import React from "react";
import JobBlk from "../../common/JobBlk";

const JobListing = ({ listing, jobs, isSearching, saveJob, isJobSaving }) => {
  return (
    <>
      <div className="flex_row job_row row">
        {isSearching ? (
          <div className="col">Fetching...</div>
        ) : jobs.length === 0 ? (
          <div className="col">No record found.</div>
        ) : (
          jobs.map((job) => {
            return (
              <div className="col" key={job.id}>
                <JobBlk job={job} saveJob={saveJob} isJobSaving={isJobSaving} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default JobListing;
