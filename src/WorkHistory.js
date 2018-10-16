import React from 'react';

export default ()=>{
    return (
        <section id="workHistory">
        <h2>Work Experience</h2>
        <section className="work-entry">
            <h3>Bridgevine - Associate Automation Engineer</h3>
            <p>March 2017 - August 2018<br/>
                Alpharetta, GA
            </p>
            <ul>
                    <li> Helped develop UI automation test suite for multiple platforms resulting in cancelling an
                        outsourced contract for regression testing
                    </li>
                    <li>Performed manual testing for tickets (development, defects, etc) in their respective sprint
                    </li>
                    <li>Regularly run automation suite to check stability of the platform
                    </li>

                </ul>
        </section>
        <section className="work-entry">
            <h3>Carter's | OshKosh B'gosh- Jr. Programming Intern</h3>
            <p>August 2016 - January 2017<br/>
                Atlanta, GA</p>
            <ul>
                <li> Create documentation of Carter’s applications for store iPod devices to enhance customer
                    experience
                </li>
                <li>Push applications to over 600 stores using the AirWatch Console
                </li>
                <li>Troubleshoot store iPod device tickets dealing with the applications and connectivity issues
                </li>
                <li>Actively developed VBA program in Excel resulting in improved daily operation
                </li>
                <li>Created a VBA function to control user pasting that was implemented in tools currently used
                </li>

            </ul>
        </section>
    </section>
    )
}