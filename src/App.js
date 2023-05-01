import React, { useEffect } from 'react';
import "./App.css";
import $ from "jquery";

const App = () => {
  








  return (


    <>


    <div id="my-element">
  <div
    data-collapse="medium"
    data-animation="default"
    data-duration={400}
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    className="navigation w-nav"
  >
    <div className="navigation-container">
      <div className="navigation-wrapper">
        <a
          href="/"
          aria-current="page"
          className="logo-link-large w-inline-block w--current"
        >
          <img
            src="https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/63fd3188958514070243ff27_Ezihealth-logo-2023.png"
            loading="lazy"
            width={150}
            alt=""
            sizes="(max-width: 991px) 100vw, 150px"
            srcSet="
          https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/63fd3188958514070243ff27_Ezihealth-logo-2023-p-500.png 500w,
          https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/63fd3188958514070243ff27_Ezihealth-logo-2023-p-800.png 800w,
          https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/63fd3188958514070243ff27_Ezihealth-logo-2023.png       948w
        "
            className="logo-2"
          />
        </a>
        <nav role="navigation" className="navigation-menu w-nav-menu">
          <a href="/solution" className="navigation-link w-nav-link">
            Solution
          </a>
          <a href="/about" className="navigation-link w-nav-link">
            About
          </a>
          <div
            data-hover="false"
            data-delay={0}
            className="navigation-dropdown-small w-dropdown"
          >
            <div className="navigation-toggle w-dropdown-toggle">
              <div className="text-block-3">Product</div>
              <div className="navigation-icon-arrow w-icon-dropdown-toggle" />
            </div>
            <nav className="navigation-list-column w-dropdown-list">
              <div className="navigation-base">
                <div
                  id="w-node-_2ed9d295-dafc-cb23-f3e5-7f88cd381f2a-cd381f1b"
                  data-current="Tab 1"
                  data-easing="ease"
                  data-duration-in={300}
                  data-duration-out={100}
                  className="tabs w-tabs"
                >
                  <div
                    id="w-node-_2ed9d295-dafc-cb23-f3e5-7f88cd381f2b-cd381f1b"
                    className="tabs-menu w-tab-menu"
                  >
                    <a
                      data-w-tab="Tab 1"
                      className="navigation-link-icon w-inline-block w-tab-link w--current"
                    >
                      <div className="navigation-icon-wrapper">
                        <div>
                          <div className="paragraph-small text-weight-medium">
                            Care Management
                          </div>
                        </div>
                      </div>
                      <div className="navigation-arrow w-embed">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.4766 11.1666L11.0066 6.69664L12.1849 5.51831L18.6666 12L12.1849 18.4816L11.0066 17.3033L15.4766 12.8333H5.33325V11.1666H15.4766Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      data-w-tab="Tab 2"
                      className="navigation-link-icon w-inline-block w-tab-link"
                    >
                      <div className="navigation-icon-wrapper">
                        <div>
                          <div className="paragraph-small text-weight-medium">
                            Client Communication
                          </div>
                        </div>
                      </div>
                      <div className="navigation-arrow w-embed">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.4766 11.1666L11.0066 6.69664L12.1849 5.51831L18.6666 12L12.1849 18.4816L11.0066 17.3033L15.4766 12.8333H5.33325V11.1666H15.4766Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      data-w-tab="Tab 4"
                      className="navigation-link-icon w-inline-block w-tab-link"
                    >
                      <div className="paragraph-small">Clinical Health CRM</div>
                      <div className="navigation-arrow w-embed">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.4766 11.1666L11.0066 6.69664L12.1849 5.51831L18.6666 12L12.1849 18.4816L11.0066 17.3033L15.4766 12.8333H5.33325V11.1666H15.4766Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      data-w-tab="Tab 3"
                      className="navigation-link-icon w-inline-block w-tab-link"
                    >
                      <div className="navigation-icon-wrapper">
                        <div>
                          <div className="paragraph-small text-weight-medium">
                            Dashboard &amp; Reporting
                          </div>
                        </div>
                      </div>
                      <div className="navigation-arrow w-embed">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.4766 11.1666L11.0066 6.69664L12.1849 5.51831L18.6666 12L12.1849 18.4816L11.0066 17.3033L15.4766 12.8333H5.33325V11.1666H15.4766Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      data-w-tab="Tab 5"
                      className="navigation-link-icon w-inline-block w-tab-link"
                    >
                      <div className="paragraph-small">Payroll</div>
                      <div className="navigation-arrow w-embed">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.4766 11.1666L11.0066 6.69664L12.1849 5.51831L18.6666 12L12.1849 18.4816L11.0066 17.3033L15.4766 12.8333H5.33325V11.1666H15.4766Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="tabs-content w-tab-content">
                    <div
                      data-w-tab="Tab 1"
                      className="tab-pane-tab-1 w-tab-pane w--tab-active"
                    >
                      <div className="navigation-column">
                        <div className="navigation-heading-detail">
                          Care Management
                        </div>
                        <p className="navigation-paragraph">
                          Care Management Software for Australian Home Care
                          &amp; NDIS providers.
                        </p>
                        <a
                          href="/product/care-management"
                          className="navigation-link-large w-inline-block"
                        >
                          <div>Learn More</div>
                          <div className="icon-2 w-embed">
                            <svg
                              width={420}
                              height={420}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.0505 12.3601L7.39447 18.0181L5.98047 16.6031L11.6375 10.9471L6.68747 5.99707H18.0005V17.3101L13.0505 12.3601Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <div className="navigation-grid">
                          <div className="navigation-grid-column">
                            <div className="communication-grid-heading">
                              Care Management
                            </div>
                            <p className="communication-grid-paragraph">
                              Eziplan provides operation efficiencies and client
                              management across your management requirements
                            </p>
                            <div className="communication-grid-heading">
                              Rostering
                            </div>
                            <p className="communication-grid-paragraph">
                              Simplify Homecare and NDIS scheduling across your
                              workforce
                            </p>
                          </div>
                          <div className="navigation-grid-column">
                            <div className="communication-grid-heading">
                              Billing &amp; Invoicing
                            </div>
                            <p className="communication-grid-paragraph">
                              Talk to us today about the variability of billing
                              and invoicing automation across NDIS &amp;
                              Homecare
                            </p>
                            <div className="communication-grid-heading">
                              Custom Forms
                            </div>
                            <p className="communication-grid-paragraph">
                              Manage compliant data capture requirement across
                              your care and service delivery processes
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-w-tab="Tab 2"
                      className="tab-pane-tab-2 w-tab-pane"
                    >
                      <div className="navigation-column">
                        <div className="navigation-heading-detail">
                          Client Communication
                        </div>
                        <p className="navigation-paragraph">
                          Manage Client, Family &amp; Staff Care Plans and
                          communication
                        </p>
                        <a
                          href="/product/communication"
                          className="navigation-link-large w-inline-block"
                        >
                          <div>Learn More</div>
                          <div className="icon-2 w-embed">
                            <svg
                              width={420}
                              height={420}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.0505 12.3601L7.39447 18.0181L5.98047 16.6031L11.6375 10.9471L6.68747 5.99707H18.0005V17.3101L13.0505 12.3601Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <div className="navigation-grid">
                          <div className="navigation-grid-column">
                            <div className="communication-grid-heading">
                              Client &amp; Family Portal
                            </div>
                            <a href="#" className="communication-text-link">
                              In App Messages
                            </a>
                            <a href="#" className="communication-text-link">
                              Service Requests
                            </a>
                            <a
                              href="#"
                              className="communication-text-link bottom-space"
                            >
                              Live Share Documents
                            </a>
                          </div>
                          <div className="navigation-grid-column">
                            <div className="communication-grid-heading">
                              Staff Mobile App
                            </div>
                            <a href="#" className="communication-text-link">
                              In App Messages
                            </a>
                            <a href="#" className="communication-text-link">
                              Time &amp; Attendance
                            </a>
                            <a
                              href="#"
                              className="communication-text-link bottom-space"
                            >
                              Progress Reporting
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Tab 4" className="w-tab-pane">
                      <div className="navigation-column">
                        <div className="navigation-heading-detail">
                          Clinical Health CRM
                        </div>
                        <p className="navigation-paragraph">
                          Ezihealth is a modern Clinical Health CRM &amp;
                          Compliance Tool
                        </p>
                        <a
                          href="/product/reporting"
                          className="navigation-link-large w-inline-block"
                        >
                          <div>Learn More</div>
                          <div className="icon-2 w-embed">
                            <svg
                              width={420}
                              height={420}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.0505 12.3601L7.39447 18.0181L5.98047 16.6031L11.6375 10.9471L6.68747 5.99707H18.0005V17.3101L13.0505 12.3601Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <div className="navigation-grid">
                          <div className="navigation-grid-column">
                            <div className="communication-grid-heading">
                              Capture Clinical Health Data
                            </div>
                            <p className="communication-grid-paragraph">
                              Ezihealth is your clinical health CRM allowing you
                              to capture standard and custom clinical health
                              markers
                            </p>
                            <div className="communication-grid-heading">
                              Pre Sales CRM
                            </div>
                            <p className="communication-grid-paragraph">
                              Easily manage customer, staff and contractor data
                              through your set processes
                            </p>
                          </div>
                          <div className="navigation-grid-column">
                            <div className="communication-grid-heading">
                              Manage Compliance
                            </div>
                            <p className="communication-grid-paragraph">
                              Good compliance over use data, status updates,
                              next requirements and alert automation are handled
                              in Ezihealth
                            </p>
                            <div className="communication-grid-heading">
                              Managed Services
                            </div>
                            <p className="communication-grid-paragraph">
                              Ezihealth provide a number of services included in
                              your solution pricing
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-w-tab="Tab 3"
                      className="tab-pane-tab-3 w-tab-pane"
                    >
                      <div className="navigation-column">
                        <div className="navigation-heading-detail">
                          Dashboard &amp; Reporting
                        </div>
                        <p className="navigation-paragraph">
                          Ezihealth hub is your Free Single Sign-on Dashboard
                          with Auditing
                        </p>
                        <a
                          href="/product/billing-claiming"
                          className="navigation-link-large w-inline-block"
                        >
                          <div>Learn More</div>
                          <div className="icon-2 w-embed">
                            <svg
                              width={420}
                              height={420}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.0505 12.3601L7.39447 18.0181L5.98047 16.6031L11.6375 10.9471L6.68747 5.99707H18.0005V17.3101L13.0505 12.3601Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <div className="navigation-grid">
                          <div className="navigation-grid-column">
                            <div className="communication-grid-heading">
                              Data Auditing
                            </div>
                            <p className="communication-grid-paragraph">
                              Review data logs of integrated events with user
                              reporting
                            </p>
                            <div className="communication-grid-heading">
                              Solution Hub
                            </div>
                            <p className="communication-grid-paragraph">
                              Software Solution dashboard providing single
                              sign-on access to your software integrations
                            </p>
                          </div>
                          <div className="navigation-grid-column">
                            <div className="communication-grid-heading">
                              Integrations
                            </div>
                            <p className="communication-grid-paragraph">
                              Integrate your current solutions or use some from
                              Ezihealth
                            </p>
                            <div className="communication-grid-heading">
                              User Compliance
                            </div>
                            <p className="communication-grid-paragraph">
                              Manage Single Sign-On access for staff and
                              contract teams to your businesses critical data
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Tab 5" className="w-tab-pane">
                      <div className="navigation-column">
                        <div className="navigation-heading-detail">Payroll</div>
                        <p className="navigation-paragraph">
                          Payroll software for Australian healthcare providers
                        </p>
                        <a
                          href="/product/payroll"
                          className="navigation-link-large w-inline-block"
                        >
                          <div>Learn More</div>
                          <div className="icon-2 w-embed">
                            <svg
                              width={420}
                              height={420}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.0505 12.3601L7.39447 18.0181L5.98047 16.6031L11.6375 10.9471L6.68747 5.99707H18.0005V17.3101L13.0505 12.3601Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <div className="navigation-grid">
                          <div className="navigation-grid-column">
                            <div className="communication-grid-heading">
                              Payroll Software
                            </div>
                            <p className="communication-grid-paragraph">
                              Ezipay is modern payroll software for Single Touch
                              Payroll requirements
                            </p>
                            <div className="communication-grid-heading">
                              Payroll Compliance
                            </div>
                            <p className="communication-grid-paragraph">
                              Australian payroll compliance software streamlines
                              payroll calculations, deductions and benefits
                              mangement
                            </p>
                          </div>
                          <div className="navigation-grid-column">
                            <div className="communication-grid-heading">
                              Award Interpretation
                            </div>
                            <p className="communication-grid-paragraph">
                              Award interpretation &amp; pay conditions
                              management
                            </p>
                            <div className="communication-grid-heading">
                              Employee Self Service
                            </div>
                            <p className="communication-grid-paragraph">
                              Manage timesheets, view payslips, super updates,
                              bank details and more
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <a href="/pricing" className="navigation-link w-nav-link">
            Pricing
          </a>
          <a href="/contact" className="navigation-link w-nav-link">
            Contact
          </a>
        </nav>
      </div>
      <div className="navigation-wrapper">
        <div className="navigation-avatar-wrapper">
          <div className="div-block-7">
            <img
              src="https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/64113956a466be6a17c31d06_Ezihealth-logo-Favicon%2035pt-01.png"
              loading="lazy"
              width={49}
              alt=""
              className="image-4"
            />
            <a
              href="https://connected.ezihealth.com.au/"
              target="_blank"
              className="navigation-link w-nav-link"
            >
              Log In
            </a>
          </div>
        </div>
        <div className="menu-button w-nav-button">
          <div className="w-icon-nav-menu" />
        </div>
      </div>
    </div>
  </div>
  <div className="global-styles w-embed">
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n        /* Get rid of top margin on first element in any rich text element */\n        .w-richtext > :not(div):first-child,\n        .w-richtext > div:first-child > :first-child {\n          margin-top: 0 !important;\n        }\n\n        /* Get rid of bottom margin on last element in any rich text element */\n        .w-richtext > :last-child,\n        .w-richtext ol li:last-child,\n        .w-richtext ul li:last-child {\n          margin-bottom: 0 !important;\n        }\n\n        /* \n    Make the following elements inherit typography styles from the parent and not have hardcoded values. \n    Important: You will not be able to style for example "All Links" in Designer with this CSS applied.\n    Uncomment this CSS to use it in the project. Leave this message for future hand-off.\n    */\n        /*\n    a,\n    .w-input,\n    .w-select,\n    .w-tab-link,\n    .w-nav-link,\n    .w-dropdown-btn,\n    .w-dropdown-toggle,\n    .w-dropdown-link {\n      color: inherit;\n      text-decoration: inherit;\n      font-size: inherit;\n    }\n    */\n\n        /* Prevent all click and hover interaction with an element */\n        .pointer-events-off {\n          pointer-events: none;\n        }\n\n        /* Enables all click and hover interaction with an element */\n        .pointer-events-on {\n          pointer-events: auto;\n        }\n\n        /* Snippet enables you to add class of div-square which creates and maintains a 1:1 dimension of a div.*/\n        .div-square::after {\n          content: "";\n          display: block;\n          padding-bottom: 100%;\n        }\n\n        /*Hide focus outline for main content element*/\n        main:focus-visible {\n          outline: -webkit-focus-ring-color auto 0px;\n        }\n\n        /* Make sure containers never lose their center alignment*/\n        .container-medium,\n        .container-small,\n        .container-large {\n          margin-right: auto !important;\n          margin-left: auto !important;\n        }\n\n        /*Reset selects, buttons, and links styles*/\n        .w-input,\n        .w-select,\n        a {\n          color: inherit;\n          text-decoration: inherit;\n          font-size: inherit;\n        }\n\n        /*Apply "..." after 3 lines of text */\n        .text-style-3lines {\n          display: -webkit-box;\n          overflow: hidden;\n          -webkit-line-clamp: 3;\n          -webkit-box-orient: vertical;\n        }\n\n        /* Apply "..." after 2 lines of text */\n        .text-style-2lines {\n          display: -webkit-box;\n          overflow: hidden;\n          -webkit-line-clamp: 2;\n          -webkit-box-orient: vertical;\n        }\n        /* Apply "..." at 100% width */\n        .truncate-width {\n          width: 100%;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        /* Removes native scrollbar */\n        .no-scrollbar {\n          -ms-overflow-style: none;\n          overflow: -moz-scrollbars-none; \n        }\n\n        .no-scrollbar::-webkit-scrollbar {\n          display: none; \n        }\n\n        /* Adds inline flex display */\n        .display-inlineflex {\n          display: inline-flex;\n        }\n\n        /* These classes are never overwritten */\n        .hide {\n          display: none !important;\n        }\n\n        @media screen and (max-width: 991px) {\n          .hide,\n          .hide-tablet {\n            display: none !important;\n          }\n        }\n        @media screen and (max-width: 767px) {\n          .hide-mobile-landscape {\n            display: none !important;\n          }\n        }\n        @media screen and (max-width: 479px) {\n          .hide-mobile {\n            display: none !important;\n          }\n        }\n\n        .margin-0 {\n          margin: 0rem !important;\n        }\n\n        .padding-0 {\n          padding: 0rem !important;\n        }\n\n        .spacing-clean {\n          padding: 0rem !important;\n          margin: 0rem !important;\n        }\n\n        .margin-top {\n          margin-right: 0rem !important;\n          margin-bottom: 0rem !important;\n          margin-left: 0rem !important;\n        }\n\n        .padding-top {\n          padding-right: 0rem !important;\n          padding-bottom: 0rem !important;\n          padding-left: 0rem !important;\n        }\n\n        .margin-right {\n          margin-top: 0rem !important;\n          margin-bottom: 0rem !important;\n          margin-left: 0rem !important;\n        }\n\n        .padding-right {\n          padding-top: 0rem !important;\n          padding-bottom: 0rem !important;\n          padding-left: 0rem !important;\n        }\n\n        .margin-bottom {\n          margin-top: 0rem !important;\n          margin-right: 0rem !important;\n          margin-left: 0rem !important;\n        }\n\n        .padding-bottom {\n          padding-top: 0rem !important;\n          padding-right: 0rem !important;\n          padding-left: 0rem !important;\n        }\n\n        .margin-left {\n          margin-top: 0rem !important;\n          margin-right: 0rem !important;\n          margin-bottom: 0rem !important;\n        }\n\n        .padding-left {\n          padding-top: 0rem !important;\n          padding-right: 0rem !important;\n          padding-bottom: 0rem !important;\n        }\n\n        .margin-horizontal {\n          margin-top: 0rem !important;\n          margin-bottom: 0rem !important;\n        }\n\n        .padding-horizontal {\n          padding-top: 0rem !important;\n          padding-bottom: 0rem !important;\n        }\n\n        .margin-vertical {\n          margin-right: 0rem !important;\n          margin-left: 0rem !important;\n        }\n\n        .padding-vertical {\n          padding-right: 0rem !important;\n          padding-left: 0rem !important;\n        }\n      '
      }}
    />
  </div>
  <div className="page-wrapper">
    <main className="main-wrapper">
      <div
        data-w-id="a6dd046a-7dcd-1142-8823-52ded1beead1"
        className="section-3 opening-animation wf-section"
      >
        <div
          data-poster-url="https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/6446201e7d058057b60bf7f0_AdobeStock_477079519 (2)-poster-00001.jpg"
          data-video-urls="https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/6446201e7d058057b60bf7f0_AdobeStock_477079519 (2)-transcode.mp4,https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/6446201e7d058057b60bf7f0_AdobeStock_477079519 (2)-transcode.webm"
          data-autoplay="true"
          data-loop="true"
          data-wf-ignore="true"
          className="opening-background-video w-background-video w-background-video-atom"
        >
          <video
            id="a6dd046a-7dcd-1142-8823-52ded1beead2-video"
            autoPlay=""
            loop=""
            style={{
              backgroundImage:
                'url("https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/6446201e7d058057b60bf7f0_AdobeStock_477079519 (2)-poster-00001.jpg")'
            }}
            muted=""
            playsInline=""
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            <source
              src="https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/6446201e7d058057b60bf7f0_AdobeStock_477079519 (2)-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/6446201e7d058057b60bf7f0_AdobeStock_477079519 (2)-transcode.webm"
              data-wf-ignore="true"
            />
          </video>
          <div className="opening-left-master">
            <div className="w-layout-grid opening-grid-left">
              <div
                id="w-node-a6dd046a-7dcd-1142-8823-52ded1beead5-6846f8c9"
                className="opening-image-left-one"
              />
              <div
                id="w-node-a6dd046a-7dcd-1142-8823-52ded1beead6-6846f8c9"
                className="opening-image-left-two left"
              />
              <div
                id="w-node-a6dd046a-7dcd-1142-8823-52ded1beead7-6846f8c9"
                className="opening-image-left-three"
              />
            </div>
          </div>
          <div className="opening-right-master">
            <div className="w-layout-grid opening-grid-right">
              <div
                id="w-node-a6dd046a-7dcd-1142-8823-52ded1beeada-6846f8c9"
                className="opening-image-right-one"
              />
              <div
                id="w-node-_85122114-9710-6043-f66b-65dad807f2ce-6846f8c9"
                className="opening-image-right-free"
              />
              <div
                id="w-node-_06658475-45c1-338b-8633-c7adb914c679-6846f8c9"
                className="opening-image-left-two-copy"
              />
            </div>
          </div>
          <div className="center-horizontal">
            <div className="limit-580 home-three-video-limit">
              <div className="center-text">
                <p className="paragraph-mega video-home-c-text">
                  Software Solutions
                  <br />
                  Supporting your <br />
                  business &amp; teams <br />
                  across Australia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-6 wf-section">
        <div>
          <h1 className="heading-7">Heading</h1>
          <img
            src="https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/63fe9d7ee10165552c49e2ea_AdobeStock_438660961-min.jpeg"
            loading="lazy"
            sizes="(max-width: 479px) 0px, 100vw"
            srcSet="
          https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/63fe9d7ee10165552c49e2ea_AdobeStock_438660961-min-p-500.jpeg   500w,
          https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/63fe9d7ee10165552c49e2ea_AdobeStock_438660961-min-p-800.jpeg   800w,
          https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/63fe9d7ee10165552c49e2ea_AdobeStock_438660961-min-p-1080.jpeg 1080w,
          https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/63fe9d7ee10165552c49e2ea_AdobeStock_438660961-min-p-1600.jpeg 1600w,
          https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/63fe9d7ee10165552c49e2ea_AdobeStock_438660961-min-p-2000.jpeg 2000w,
          https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/63fe9d7ee10165552c49e2ea_AdobeStock_438660961-min-p-2600.jpeg 2600w,
          https://uploads-ssl.webflow.com/63fd305b651d71e5c446f8b9/63fe9d7ee10165552c49e2ea_AdobeStock_438660961-min-p-3200.jpeg 3200w
        "
            alt=""
            className="image-9"
          />
        </div>
      </div>
    
 
    
    
    </main>
  </div>

    </div>
    </>

  )
}

export default App
