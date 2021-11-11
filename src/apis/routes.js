const SIGN_UP = {
  METHOD: "POST",
  URL: "/users/sign-up",
};

const SIGN_UP_V2 = {
  METHOD: "POST",
  URL: "/users/sign-up.v2",
};

const MEMBERSHIP_APPLY = {
  METHOD: "POST",
  URL: "/users/member/:userId/membership-type.apply",
};

const SIGN_OUT = {
  METHOD: "POST",
  URL: "/users/sign-out",
};

const SIGN_UP_INVITE = {
  METHOD: "POST",
  URL: "/users/sign-up.v2",
};

const SEND_OTP = {
  METHOD: "POST",
  URL: "/verifications/sms/issue/otp",
};

const VERIFY_OTP = {
  METHOD: "POST",
  URL: "/verifications/sms/verify/otp",
};

const SEARCH_MEMBER = {
  METHOD: "GET",
  URL: "/users/members.search",
};

const SIGN_IN = {
  METHOD: "POST",
  URL: "/users/sign-in",
};

const CHANGE_USER_ROLE = {
  METHOD: "POST",
  URL: "/users/:userId/actions.role"
}

const MEMBERSHIP_APPLICATION = {
  METHOD: "POST",
  URL: "/memberships",
};

const PEOPLE_CREATE_GROUP = {
  METHOD: "POST",
  URL: "/groups",
};

const PEOPLE_DELETE_GROUP = {
  METHOD: "DELETE",
  URL: "/groups/:id",
};

const PEOPLE_UPDATE_GROUP = {
  METHOD: "PUT",
  URL: "/groups/:id",
};

const PEOPLE_FETCH_ALL_GROUPS = {
  METHOD: "GET",
  URL: "/groups",
};

const PEOPLE_FETCH_GROUP = {
  METHOD: "GET",
  URL: "/groups/:id",
};

const PEOPLE_INVITE_USERS = {
  METHOD: "POST",
  URL: "/invitations/invites.email",
};

const PEOPLE_FETCH_MEMBERS = {
  METHOD: "GET",
  URL: "/groups/:id/members?pageNo=:pgNo&name=:name",
};

const PEOPLE_FETCH_PAST_INVITES = {
  METHOD: "GET",
  URL: "/invitations",
};

const PEOPLE_SEND_INVITES_LINK = {
  METHOD: "POST",
  URL: "/invitations/invites.link",
};

const PEOPLE_REVOKE_INVITATION = {
  METHOD: "POST",
  URL: "/invitations/:inviteId/revoke",
};

const PEOPLE_RESEND_INVITATION = {
  METHOD: "POST",
  URL: "/invitations/:inviteId/reminders.email",
};

const PEOPLE_ACCEPT_INVITES_LINK = {
  METHOD: "POST",
  URL: "/invitations/accept.link",
};

const EVENTS_SPONSOR_PUBLIC_PROFILE = {
  METHOD: "GET",
  URL: "/events/:id/profile.public",
};

const EVENTS_SPONSORS = {
  METHOD: "GET",
  URL: "/events/:id/sponsorships",
};

const EVENTS_EXHIBITORS = {
  METHOD: "GET",
  URL: "/events/:id/exhibitors",
}

const EVENTS_FETCH_EVENTS_CARDS = {
  METHOD: "GET",
  URL: "/events",
};

const EVENTS_FETCH_EVENTS_PROFILE = {
  METHOD: "GET",
  URL: "/events/:id/profile.short",
};

const PEOPLE_GET_COUNTRIES = {
  METHOD: "GET",
  URL: "/countries",
};

const PEOPLE_ADD_REGION = {
  METHOD: "POST",
  URL: "/regions",
};

const PEOPLE_GET_ONE_REGION = {
  METHOD: "GET",
  URL: "/regions/:regionId",
};

const PEOPLE_GET_ALL_REGIONS = {
  METHOD: "GET",
  URL: "/regions",
};

const PEOPLE_UPDATE_ONE_REGION = {
  METHOD: "PATCH",
  URL: "/regions/:regionId",
};

const PEOPLE_DELETE_ONE_REGION = {
  METHOD: "DELETE",
  URL: "/regions/:regionId",
};

const PEOPLE_ADD_MEMBERSHIP_LEVEL = {
  METHOD: "POST",
  URL: "/membershipLevels",
};

const PEOPLE_GET_ONE_MEMBERSHIP_LEVEL = {
  METHOD: "GET",
  URL: "/membershipLevels/:membershipId",
};

const PEOPLE_GET_ALL_MEMBERSHIP_LEVELS = {
  METHOD: "GET",
  URL: "/membershipLevels",
};

const PEOPLE_UPDATE_ONE_MEMBERSHIP_LEVEL = {
  METHOD: "PATCH",
  URL: "/membershipLevels/:membershipId",
};

const PEOPLE_DELETE_ONE_MEMBERSHIP_LEVEL = {
  METHOD: "DELETE",
  URL: "/membershipLevels/:membershipId",
};

const PEOPLE_ADD_MEMBERSHIP_TYPE = {
  METHOD: "POST",
  URL: "/membershipTypes",
};

const PEOPLE_GET_ONE_MEMBERSHIP_TYPE = {
  METHOD: "GET",
  URL: "/membershipTypes/:membershipId",
};

const PEOPLE_GET_ALL_MEMBERSHIP_TYPE = {
  METHOD: "GET",
  URL: "/membershipTypes",
};

const PEOPLE_UPDATE_ONE_MEMBERSHIP_TYPE = {
  METHOD: "PATCH",
  URL: "/membershipTypes/:membershipId",
};

const PEOPLE_DELETE_ONE_MEMBERSHIP_TYPE = {
  METHOD: "DELETE",
  URL: "/membershipTypes/:membershipId",
};

const PEOPLE_ADD_CO_MEMBERSHIP_TYPE = {
  METHOD: "POST",
  URL: "/coMembershipTypes",
};

const PEOPLE_GET_ONE_CO_MEMBERSHIP_TYPE = {
  METHOD: "GET",
  URL: "/coMembershipTypes/:membershipId",
};

const PEOPLE_GET_ALL_CO_MEMBERSHIP_TYPE = {
  METHOD: "GET",
  URL: "/coMembershipTypes",
};

const PEOPLE_UPDATE_ONE_CO_MEMBERSHIP_TYPE = {
  METHOD: "PATCH",
  URL: "/coMembershipTypes/:membershipId",
};

const PEOPLE_DELETE_ONE_CO_MEMBERSHIP_TYPE = {
  METHOD: "DELETE",
  URL: "/coMembershipTypes/:membershipId",
}
const PEOPLE_FETCH_MEMBER_PROFILE = {
  METHOD: "GET",
  URL: "/users/member/:memberId/profile.full",
};

const PEOPLE_FETCH_ALL_MEMBERS = {
  METHOD: "GET",
  URL: "/users/members",
};

const PEOPLE_FETCH_INVITE_LINKS = {
  METHOD: "GET",
  URL: "/invitations/invites.link",
};

const SETTINGS_IMPLANT_GET_ALL = {
  METHOD: "GET",
  URL: "/implantSpecializations",
};

const SETTINGS_IMPLANT_GET_ONE = {
  METHOD: "GET",
  URL: "/implantSpecializations/:id",
};

const SETTINGS_IMPLANT_POST = {
  METHOD: "POST",
  URL: "/implantSpecializations",
};

const SETTINGS_IMPLANT_UPDATE = {
  METHOD: "PATCH",
  URL: "/implantSpecializations/:id",
};

const SETTINGS_IMPLANT_DELETE = {
  METHOD: "DELETE",
  URL: "/implantSpecializations/:id",
};

const SETTINGS_LAB_TECH_GET_ALL = {
  METHOD: "GET",
  URL: "/labTechSpecializatons",
};

const SETTINGS_LAB_TECH_GET_ONE = {
  METHOD: "GET",
  URL: "/labTechSpecializatons/:id",
};

const SETTINGS_LAB_TECH_POST = {
  METHOD: "POST",
  URL: "/labTechSpecializatons",
};

const SETTINGS_LAB_TECH_UPDATE = {
  METHOD: "PATCH",
  URL: "/labTechSpecializatons/:id",
};

const SETTINGS_LAB_TECH_DELETE = {
  METHOD: "DELETE",
  URL: "/labTechSpecializatons/:id",
};


const SETTINGS_ADV_LAB_TECH_GET_ALL = {
  METHOD: "GET",
  URL: "/advancedLabTechSpecializatons",
};

const SETTINGS_ADV_LAB_TECH_GET_ONE = {
  METHOD: "GET",
  URL: "/advancedLabTechSpecializatons/:id",
};

const SETTINGS_ADV_LAB_TECH_POST = {
  METHOD: "POST",
  URL: "/advancedLabTechSpecializatons",
};

const SETTINGS_ADV_LAB_TECH_UPDATE = {
  METHOD: "PATCH",
  URL: "/advancedLabTechSpecializatons/:id",
};

const SETTINGS_ADV_LAB_TECH_DELETE = {
  METHOD: "DELETE",
  URL: "/advancedLabTechSpecializatons/:id",
};

const PEOPLE_FETCH_SHORT_PROFILE = {
  METHOD: "GET",
  URL: "users/member/:memberId/profile.short",
};

const SETTINGS_AFFILIATE_POST = {
  METHOD: "POST",
  URL: "/groups/affiliates",
};

const SETTINGS_AFFILIATE_GET_ALL = {
  METHOD: "GET",
  URL: "/groups/affiliates",
};

const SETTINGS_AFFILIATE_UPDATE = {
  METHOD: "PATCH",
  URL: "/groups/affiliates/:id",
};

const SETTINGS_AFFILIATE_DELETE = {
  METHOD: "DELETE",
  URL: "/groups/affiliates/:id",
};

const PEOPLE_ADD_MEMBER_EDUCATION = {
  METHOD: "POST",
  URL: "/users/member/:memberId/education",
};

const PEOPLE_UPDATE_MEMBER_EDUCATION = {
  METHOD: "PATCH",
  URL: "/users/member/:memberId/education/:educationId",
};

const PEOPLE_DELETE_MEMBER_EDUCATION = {
  METHOD: "DELETE",
  URL: "/users/member/:memberId/education/:educationId",
};

const PEOPLE_GET_GROUP_FULL_PROFILE = {
  METHOD: "GET",
  URL: "/groups/:groupId/profile.full",
};

const PEOPLE_UPDATE_GROUP_PROFILE = {
  METHOD: "PATCH",
  URL: "/groups/:groupId",
};

const PEOPLE_UPDATE_MEMBER_PROFILE = {
  METHOD: "PATCH",
  URL: "/users/members/:memberId",
};

const PEOPLE_UPDATE_AFFILIATE_PROFILE = {
  METHOD: "PATCH",
  URL: "/groups/affiliates/:affiliatesId",
};

const PEOPLE_GET_GROUP_STATISTICS = {
  METHOD: "GET",
  URL: "/groups/statistics",
};

const PEOPLE_GET_USER_STATISTICS = {
  METHOD: "GET",
  URL: "/users/statistics",
};

const PEOPLE_FETCH_ALL_USERS = {
  METHOD: "GET",
  URL: "/users/users",
};

const SETTINGS_POST_FEE_SCHEDULE = {
  METHOD: "POST",
  URL: "/fees",
};

const SETTINGS_GET_FEE_SCHEDULE = {
  METHOD: "GET",
  URL: "/fees",
};

const SETTINGS_UPDATE_FEE_SCHEDULE = {
  METHOD: "PATCH",
  URL: "/fees/:feeId",
};

const SETTINGS_DELETE_FEE_SCHEDULE = {
  METHOD: "DELETE",
  URL: "/fees/:feeId",
};

const PAYMENTS_GET_ALL_PAYMENTS = {
  METHOD: "GET",
  URL: "/payments",
};

const PAYMENTS_GET_SPECIFIC_PAYMENT = {
  METHOD: "GET",
  URL: "/payments/:paymentId",
};

const PAYMENTS_MEMBERSHIP_RENEWAL_CHARGE = {
  METHOD: "POST",
  URL: "/payments/membership-renewal/:paymentId/charge",
};

const PAYMENTS_GET_UPCOMING_PAYMENTS = {
  METHOD: "GET",
  URL: "/payments/upcoming",
};

const PAYMENTS_GET_OUTSTANDING_PAYMENTS = {
  METHOD: "GET",
  URL: "/payments/outstanding",
};

const PAYMENTS_GET_STATISTICS_PAYMENTS = {
  METHOD: "GET",
  URL: "/payments/statistics.payments",
};

const PAYMENTS_GET_STATISTICS_ACCOUNTS = {
  METHOD: "GET",
  URL: "/payments/statistics.accounts",
};

const PAYMENTS_SEND_REMINDER = {
  METHOD: "POST",
  URL: "/payments/:paymentId/reminders.send",
};

const USERS_GET_ACCOUNT_ACTIVITIES = {
  METHOD: "GET",
  URL: "/users/:userId/activities",
};

const PEOPLE_GET_AFFILIATES_PAYMENT = {
  METHOD: "GET",
  URL: "/payments/affiliates",
};

const PEOPLE_GET_REVENUE_GRAPH = {
  METHOD: "GET",
  URL: "/payments/revenue",
};

const PEOPLE_SEND_PAYMENT_REMINDER = {
  METHOD: "POST",
  URL: "/payments/:memberId/reminders.send",
};

const VERIFY_INVITATION = {
  METHOD: "POST",
  URL: "/invitations/:invitationId/verify"
};

const SET_ACCOUNT_PASSWORD = {
  METHOD: "POST",
  URL: "/users/password/set"
};

const DEACTIVATE_A_USER = {
  METHOD: "POST",
  URL: "/users/:userId/actions.status"
}

const FETCH_MEMBER_TRANSACTIONS = {
  METHOD: "GET",
  URL: "/payments/users/:userId/history",
};

const PEOPLE_UPDATE_MEMBER_ADDRESS = {
  METHOD: "PATCH",
  URL: "/users/member/:memberId/address/:addressId"
};

const PEOPLE_DELETE_MEMBER_ADDRESS = {
  METHOD: "DELETE",
  URL: "/users/member/:memberId/address/:addressId"
};

const PEOPLE_ADD_MEMBER_ADDRESS = {
  METHOD: "POST",
  URL: "/users/member/:memberId/address"
};

const MEMBERSHIP_MEMBER_EXIST_CHECK = {
  METHOD: "POST",
  URL: "/users/exists"
};

const MEMBERSHIP_CREATE_MEMBER = {
  METHOD: "POST",
  URL: "/users/member"
};

const APPLICATIONS_MEMBERSHIP_DETAILS = {
  METHOD: "GET",
  URL: "/applications/:id"
};

const PAYMENTS_MEMBERSHIP_APPLICATION_CHARGE = {
  METHOD: "POST",
  URL: "/payments/membership-type-application/:paymentId/charge",
};

const MEMBERSHIP_TYPE_AVAIL_IN_REGION = {
  METHOD: "GET",
  URL: "/regions/membership-types",
};

const MEMBERSHIP_NEW_SET_PASSWORD = {
  METHOD: "POST",
  URL: "/users/password/set",
};

const FETCH_MEMBER_PAYMENT_HISTORY = {
  METHOD: "GET",
  URL: "/payments/users/:userId/history"
};

const FETCH_MEMBER_UPCOMING_PAYMENTS = {
  METHOD: "GET",
  URL: "/payments/users/:userId/upcoming"
};

const FETCH_ALL_NOTIFICATIONS = {
  METHOD: "GET",
  URL: "/notifications/:userId/history.all"
};

const FETCH_ALL_UNREAD_NOTIFICATIONS = {
  METHOD: "GET",
  URL: "/notifications/:userId/history.unread"
};

const FETCH_STATES_OF_COUNTRY = {
  METHOD: "GET",
  URL: "/regions/countries/:countryId/states"
};

const FETCH_CITIES_OF_STATE = {
  METHOD: "GET",
  URL: "/regions/states/:stateId/cities"
};

const FORGOT_PASSWORD = {
  METHOD: "POST",
  URL: "/users/password/forgot"
}

const RESET_PASSWORD = {
  METHOD: "POST",
  URL: "/users/password/reset"
}

const VERIFY_RESET_PASSWORD = {
  METHOD: "POST",
  URL: "/verifications/password.reset"
}

const CHANGE_MEMBERSHIP_STATUS = {
  METHOD: "POST",
  URL: "/users/members/:userId/actions.status"
}

const MEMBERSHIP_PAY_ONLINE_V2 = {
  METHOD: "POST",
  URL: "/users/member/:userId/membership-type.pay"
}

const FETCH_MEMBER_NOTES = {
  METHOD: "GET",
  URL: "/notes/:userId"
}

const ADD_MEMBER_NOTES = {
  METHOD: "POST",
  URL: "/notes/:userId"
}

const EDIT_MEMBER_NOTES = {
  METHOD: "PATCH",
  URL: "/notes/:noteId"
}

const DELETE_MEMBER_NOTES = {
  METHOD: "DELETE",
  URL: "/notes/:noteId"
}

const FETCH_MEMBER_APPLICATION_STATE = {
  METHOD: "GET",
  URL: "/credential-applications/:applicationId/state"
}

const ADD_APPLICATION_RECOMMENDATION = {
  METHOD: "POST",
  URL: "/credential-applications/:applicationId/recommendations.add"
}

const ADD_APPLICATION_RESUME = {
  METHOD: "POST",
  URL: "/credential-applications/:applicationId/resume.add"
}

const ADD_APPLICATION_PRESENTATION = {
  METHOD: "POST",
  URL: "/credential-applications/:applicationId/presentation.add"
}

const DELETE_APPLICATION_PRESENTATION = {
  METHOD: "DELETE",
  URL: "/credential-applications/:applicationId/presentation.delete"
}

const UPDATE_APPLICATION_PRESENTATION = {
  METHOD: "PATCH",
  URL: "/credential-applications/:applicationId/presentation.update"
}

const DELETE_APPLICATION_RECOMMENDATION = {
  METHOD: "DELETE",
  URL: "/credential-applications/:applicationId/recommendations.delete"
}

const FETCH_ALL_RECOMMENDATIONS = {
  METHOD: "GET",
  URL: "/application-forms/:membershipLevelId/recommendations"
}

const SUBMIT_APPLICATION_FORM = {
  METHOD: "POST",
  URL: "/credential-applications/:applicationId/submit"
}

const DELETE_APPLICATION_RESUME = {
  METHOD: "DELETE",
  URL: "/credential-applications/:applicationId/resume.delete"
}

const FETCH_ALL_MEMBERSHIP_LEVELS = {
  METHOD: "GET",
  URL: "/application-forms/levels"
}

const APPLY_MEMBERSHIP_APPLICATION = {
  METHOD: "POST",
  URL: "/credential-applications/:membershipLevelId/apply"
}

const ADD_APPLICATION_REQUIREMENTS = {
  METHOD: "POST",
  URL: "/credential-applications/:applicationId/:requirementId/requirements.add"
}

const FETCH_APPLICATION_REQUIREMENTS = {
  METHOD: "GET",
  URL: "/credential-applications/:applicationId/requirements"
}

const DELETE_APPLICATION_REQUIREMENTS = {
  METHOD: "DELETE",
  URL: "/credential-applications/:applicationId/requirements.delete"
}

const UPDATE_APPLICATION_REQUIREMENTS = {
  METHOD: "PATCH",
  URL: "/credential-applications/:applicationId/requirements.update"
}

const ADD_EDUCATION_DETAILS = {
  METHOD: "POST",
  URL: "/credential-applications/:applicationId/:requirementId/requirements.add"
}

const UPDATE_EDUCATION_DETAILS = {
  METHOD: "PATCH",
  URL: "/credential-applications/:applicationId/requirements.update"
}

const DELETE_EDUCATION_DETAILS = {
  METHOD: "DELETE",
  URL: "/credential-applications/:applicationId/requirements.delete"
}

const FETCH_ADMIN_APPLICATION_STATE = {
  METHOD: "GET",
  URL: "/credential-applications/admin/:applicationId/state"
}

const FETCH_ADMIN_APPLICATION_REQUIREMENTS = {
  METHOD: "GET",
  URL: "/credential-applications/admin/:applicationId/requirements"
}

const FETCH_MEMBER_LEVEL_APPLICATION = {
  METHOD: "GET",
  URL: "/application-forms/admin/levels"
}

const FETCH_CREDENTIAL_APPLICATIONS = {
  METHOD: "GET",
  URL: "/credential-applications/admin/applications"
}

const CHANGE_REQUIREMENT_DETAIL_STATUS = {
  METHOD: "PATCH",
  URL: "/credential-applications/admin/:applicationId/requirementDetail.update"
}

const ACCEPT_CREDENTIALING_APPLICATION = {
  METHOD: "POST",
  URL: "/credential-applications/admin/:applicationId/status.approve"
}

const REJECT_CREDENTIALING_APPLICATION = {
  METHOD: "POST",
  URL: "/credential-applications/admin/:applicationId/status.reject"
}

const CHANGE_REQUIREMENT_STATUS = {
  METHOD: "PATCH",
  URL: "/credential-applications/admin/:applicationId/requirements.update"
}

const UPDATE_APPLICATION_REQUIREMENT_STATUS = {
  METHOD: "PATCH",
  URL: "/credential-applications/admin/:applicationId/update"
}

const NOTIFY_APPLICATION_RECOMMENDER = {
  METHOD: "POST",
  URL: "/credential-applications/admin/:applicationId/recommendations.email"
}

const CHANGE_PRESENTATION_STATUS = {
  METHOD: "PATCH",
  URL: "/credential-applications/admin/:applicationId/presentations.update"
}

const CREDENTIALING_ACCEPT_RECOMMENDATION = {
  METHOD: "POST",
  URL: "/credential-applications/admin/:applicationId/recommendations.approve"
}

const CREDENTIALING_REJECT_RECOMMENDATION = {
  METHOD: "POST",
  URL: "/credential-applications/admin/:applicationId/recommendations.reject"
}

const UPDATE_RESUME_STATUS = {
  METHOD: "PATCH",
  URL: "/credential-applications/admin/:applicationId/resume.update"
}

const GRANT_CREDENTIAL = {
  METHOD: "POST",
  URL: "/credential-applications/admin/:applicationId/grant"
}

const GET_PRESIGNED_URL_FOR_FILES = {
  METHOD: "POST",
  URL: "/users/files/actions.fileupload.request"
}

const CHARGE_CREDENTIAL_PAYMENTS = {
  METHOD: "POST",
  URL: "/credential-applications/admin/:applicationId/credential.payment"
}

const SELECT_EVENT_MEETING = {
  METHOD: "PATCH",
  URL: "/credential-applications/:applicationId/meetings.add"
}

const DELETE_EVENT_MEETING = {
  METHOD: "DELETE",
  URL: "/credential-applications/:applicationId/meetings.delete"
}

const ADD_TEMPLATE = {
  METHOD: "POST",
  URL: "/templates"
}

const FETCH_TEMPLATES_LIST = {
  METHOD: "GET",
  URL: "/templates"
}

const DELETE_TEMPLATE = {
  METHOD: "DELETE",
  URL: "/templates/:templateId"
}

const FETCH_SURVEY_RESULT = {
  METHOD: "GET",
  URL: "/surveys-results/:surveyResultId"
}

const EDIT_TEMPLATE = {
  METHOD: "PATCH",
  URL: "/templates/:templateId"
}

const COPY_TEMPLATE = {
  METHOD: "POST",
  URL: "/templates/:templateId/clone"
}

const ADD_SURVEY_QUESTION = {
  METHOD: "POST",
  URL: "/surveys/:surveyId/questions"
}

const DELETE_SURVEY_QUESTION = {
  METHOD: "DELETE",
  URL: "/surveys/:surveyId/questions"
}

const EDIT_SURVEY_QUESTION = {
  METHOD: "PATCH",
  URL: "/surveys/:surveyId/questions"
}

const COPY_SURVEY_QUESTION = {
  METHOD: "POST",
  URL: "/surveys/:surveyId/questions.clone"
}

const ADD_TEMPLATE_QUESTION = {
  METHOD: "POST",
  URL: "/templates/:templateId/questions"
}

const DELETE_TEMPLATE_QUESTION = {
  METHOD: "DELETE",
  URL: "/templates/:templateId/questions"
}

const EDIT_TEMPLATE_QUESTION = {
  METHOD: "PATCH",
  URL: "/templates/:templateId/questions"
}

const COPY_TEMPLATE_QUESTION = {
  METHOD: "POST",
  URL: "/templates/:templateId/questions.clone"
}

const FETCH_SINGLE_TEMPLATE = {
  METHOD: "GET",
  URL: "/templates/:templateId"
}

const FETCH_SURVEY_DATA = {
  METHOD: "GET",
  URL: "/surveys/:surveyId"
}

const ATTACH_SURVEY = {
  METHOD: "POST",
  URL: "/surveys/:surveyId/attach"
}

const FETCH_BADGE = {
  METHOD: "GET",
  URL: "/events/:eventId/badges"
}

const DELETE_BADGE = {
  METHOD: "DELETE",
  URL: "/events/:eventId/badges"
}

const ADD_BADGE = {
  METHOD: "POST",
  URL: "/events/:eventId/badges"
}

const UPDATE_BADGE = {
  METHOD: "PATCH",
  URL: "/events/:eventId/badges"
}

const ADD_SPONSORS = {
  METHOD: "POST",
  URL: "/events/:eventId/sponsorships"
}

const FETCH_SPONSORS = {
  METHOD: "GET",
  URL: "/events/:eventId/sponsorships"
}

const DELETE_SPONSORS = {
  METHOD: "DELETE",
  URL: "/events/:eventId/sponsorships"
}

const UPDATE_SPONSORS = {
  METHOD: "PATCH",
  URL: "/events/:eventId/sponsorships"
}

const ADD_EXHIBITOR = {
  METHOD: "POST",
  URL: "/events/:eventId/exhibitorships"
}

const FETCH_EXHIBITOR = {
  METHOD: "GET",
  URL: "/events/:eventId/exhibitorships"
}

const UPDATE_EXHIBITOR = {
  METHOD: "PATCH",
  URL: "/events/:eventId/exhibitorships"
}
  
const FETCH_EVENT_BOOTHS = {
  METHOD: "GET",
  URL: "/booths/:eventId/booths.search",
}

const ADD_BOOTH_MAP = {
  METHOD: "POST",
  URL: "/events/:eventId/maps"
}

const DELETE_BOOTH_MAP = {
  METHOD: "DELETE",
  URL: "/events/:eventId/maps"
}

const FETCH_BOOTH_DETAIL = {
  METHOD: "GET",
  URL: "/booths/:eventId"
}

const ADD_BOOTH_INFORMATION = {
  METHOD: "POST",
  URL: "/booths"
}

const UPDATE_BOOTH_INFORMATION = {
  METHOD: "PATCH",
  URL: "/booths/:groupId"
}

const DELETE_BOOTH_INFORMATION = {
  METHOD: "DELETE",
  URL: "/booths/:groupId"
}

const ADD_SPECIFIC_BOOTH = {
  METHOD: "POST",
  URL: "/booths/booth.add"
}

const DELETE_SPECIFIC_BOOTH = {
  METHOD: "DELETE",
  URL: "/booths/booth.delete"
}

const FETCH_CEU_STATS = {
  METHOD: "GET",
  URL: "/users/member/:userId/ceu.statistics"
}

const FETCH_CEU_CERTIS = {
  METHOD: "GET",
  URL: "/users/member/:userId/ceu.certificates"
}

const FETCH_SPONSOR_PRIVILEGES_TEMPLATE = {
  METHOD: "GET",
  URL: "/events/privileges"
}; 

const UPDATE_SPONSORSHIP = {
  METHOD: "PATCH",
  URL: "/sponsorship-types/:sponsorshipId"
};

const ADD_SPONSORSHIP = {
  METHOD: "POST",
  URL: "/sponsorship-types"
};

const COPY_SPONSORSHIP = {
  METHOD: "POST",
  URL: "/sponsorship-types/:sponsorshipId/clone"
};

const DELETE_SPONSORSHIP = {
  METHOD: "DELETE",
  URL: "/sponsorship-types/:sponsorshipId"
};
const FETCH_AFFILIATE_INVOICES = {
  METHOD: "GET",
  URL: "/invoices/:affiliateId"
}

const GENERATE_AFFILIATE_INVOICES = {
  METHOD: "POST",
  URL: "/payments/affiliates/:affiliateId/invoice.generation.offline"
}

const SAVE_AFFILIATE_CHEQUE_DETAILS = {
  METHOD: "POST",
  URL: "/cheque"
}

const FETCH_ALL_CHEQUES = {
  METHOD: "GET",
  URL: "/cheque"
}

const UPDATE_PARTICULAR_CHEQUE = {
  METHOD: "PATCH",
  URL: "cheque/:chequeId"
}

const UPDATE_PARTICULAR_MEMBER_CHEQUE = {
  METHOD: "PATCH",
  URL: "cheque/users/:chequeId"
}
  
const CHANGE_PAYMENT_METHOD = {
  METHOD: "PATCH",
  URL: "/payments/users/:paymentId/payment.update"
}

const GENERATE_MEMBER_OFFLINE_INVOICE = {
  METHOD: "POST",
  URL: "/payments/invoice/:paymentId/offline.payments.generate"
}

const SAVE_MEMBER_CHEQUE_DETAILS = {
  METHOD: "POST",
  URL: "/cheque/users"
}
const CREATE_EVENT = {
  METHOD: "POST",
  URL: "/events"
}

const FETCH_EVENT = {
  METHOD: "GET",
  URL: "/events"
}


const ROUTES = {
  SIGN_IN,
  SIGN_UP,
  SIGN_UP_V2,
  MEMBERSHIP_APPLY,
  SIGN_OUT,
  SIGN_UP_INVITE,
  SEND_OTP,
  VERIFY_OTP,
  SEARCH_MEMBER,
  MEMBERSHIP_APPLICATION,
  PEOPLE_CREATE_GROUP,
  PEOPLE_DELETE_GROUP,
  PEOPLE_UPDATE_GROUP,
  PEOPLE_FETCH_ALL_GROUPS,
  PEOPLE_FETCH_GROUP,
  PEOPLE_INVITE_USERS,
  PEOPLE_FETCH_MEMBERS,
  PEOPLE_FETCH_PAST_INVITES,
  PEOPLE_SEND_INVITES_LINK,
  PEOPLE_REVOKE_INVITATION,
  PEOPLE_RESEND_INVITATION,
  PEOPLE_ACCEPT_INVITES_LINK,
  EVENTS_SPONSOR_PUBLIC_PROFILE,
  EVENTS_SPONSORS,
  EVENTS_EXHIBITORS,
  EVENTS_FETCH_EVENTS_CARDS,
  EVENTS_FETCH_EVENTS_PROFILE,
  PEOPLE_GET_COUNTRIES,
  PEOPLE_ADD_REGION,
  PEOPLE_GET_ONE_REGION,
  PEOPLE_GET_ALL_REGIONS,
  PEOPLE_UPDATE_ONE_REGION,
  PEOPLE_DELETE_ONE_REGION,
  PEOPLE_ADD_MEMBERSHIP_LEVEL,
  PEOPLE_GET_ONE_MEMBERSHIP_LEVEL,
  PEOPLE_GET_ALL_MEMBERSHIP_LEVELS,
  PEOPLE_UPDATE_ONE_MEMBERSHIP_LEVEL,
  PEOPLE_DELETE_ONE_MEMBERSHIP_LEVEL,
  PEOPLE_ADD_MEMBERSHIP_TYPE,
  PEOPLE_GET_ONE_MEMBERSHIP_TYPE,
  PEOPLE_GET_ALL_MEMBERSHIP_TYPE,
  PEOPLE_UPDATE_ONE_MEMBERSHIP_TYPE,
  PEOPLE_DELETE_ONE_MEMBERSHIP_TYPE,
  PEOPLE_ADD_CO_MEMBERSHIP_TYPE,
  PEOPLE_GET_ONE_CO_MEMBERSHIP_TYPE,
  PEOPLE_GET_ALL_CO_MEMBERSHIP_TYPE,
  PEOPLE_UPDATE_ONE_CO_MEMBERSHIP_TYPE,
  PEOPLE_DELETE_ONE_CO_MEMBERSHIP_TYPE,
  PEOPLE_FETCH_MEMBER_PROFILE,
  PEOPLE_FETCH_ALL_MEMBERS,
  PEOPLE_FETCH_INVITE_LINKS,
  SETTINGS_IMPLANT_GET_ALL,
  SETTINGS_IMPLANT_GET_ONE,
  SETTINGS_IMPLANT_POST,
  SETTINGS_IMPLANT_UPDATE,
  SETTINGS_IMPLANT_DELETE,
  SETTINGS_LAB_TECH_GET_ALL,
  SETTINGS_LAB_TECH_GET_ONE,
  SETTINGS_LAB_TECH_POST,
  SETTINGS_LAB_TECH_UPDATE,
  SETTINGS_LAB_TECH_DELETE,
  SETTINGS_ADV_LAB_TECH_GET_ALL,
  SETTINGS_ADV_LAB_TECH_GET_ONE,
  SETTINGS_ADV_LAB_TECH_POST,
  SETTINGS_ADV_LAB_TECH_UPDATE,
  SETTINGS_ADV_LAB_TECH_DELETE,
  PEOPLE_FETCH_SHORT_PROFILE,
  SETTINGS_AFFILIATE_POST,
  SETTINGS_AFFILIATE_GET_ALL,
  SETTINGS_AFFILIATE_UPDATE,
  SETTINGS_AFFILIATE_DELETE,
  PEOPLE_ADD_MEMBER_EDUCATION,
  PEOPLE_UPDATE_MEMBER_EDUCATION,
  PEOPLE_DELETE_MEMBER_EDUCATION,
  PEOPLE_GET_GROUP_FULL_PROFILE,
  PEOPLE_UPDATE_GROUP_PROFILE,
  PEOPLE_UPDATE_MEMBER_PROFILE,
  PEOPLE_UPDATE_AFFILIATE_PROFILE,
  PEOPLE_GET_GROUP_STATISTICS,
  PEOPLE_GET_USER_STATISTICS,
  PEOPLE_FETCH_ALL_USERS,
  SETTINGS_POST_FEE_SCHEDULE,
  SETTINGS_GET_FEE_SCHEDULE,
  SETTINGS_UPDATE_FEE_SCHEDULE,
  SETTINGS_DELETE_FEE_SCHEDULE,
  PAYMENTS_GET_ALL_PAYMENTS,
  PAYMENTS_GET_SPECIFIC_PAYMENT,
  PAYMENTS_MEMBERSHIP_RENEWAL_CHARGE,
  PAYMENTS_GET_UPCOMING_PAYMENTS,
  PAYMENTS_GET_OUTSTANDING_PAYMENTS,
  PAYMENTS_GET_STATISTICS_PAYMENTS,
  PAYMENTS_GET_STATISTICS_ACCOUNTS,
  PAYMENTS_SEND_REMINDER,
  USERS_GET_ACCOUNT_ACTIVITIES,
  PEOPLE_GET_AFFILIATES_PAYMENT,
  PEOPLE_SEND_PAYMENT_REMINDER,
  PEOPLE_GET_REVENUE_GRAPH,
  VERIFY_INVITATION,
  SET_ACCOUNT_PASSWORD,
  CHANGE_USER_ROLE,
  DEACTIVATE_A_USER,
  FETCH_MEMBER_TRANSACTIONS,
  PEOPLE_UPDATE_MEMBER_ADDRESS,
  PEOPLE_DELETE_MEMBER_ADDRESS,
  PEOPLE_ADD_MEMBER_ADDRESS,
  MEMBERSHIP_MEMBER_EXIST_CHECK,
  MEMBERSHIP_CREATE_MEMBER,
  APPLICATIONS_MEMBERSHIP_DETAILS,
  PAYMENTS_MEMBERSHIP_APPLICATION_CHARGE,
  MEMBERSHIP_TYPE_AVAIL_IN_REGION,
  MEMBERSHIP_NEW_SET_PASSWORD,
  FETCH_MEMBER_PAYMENT_HISTORY,
  FETCH_MEMBER_UPCOMING_PAYMENTS,
  FETCH_ALL_NOTIFICATIONS,
  FETCH_ALL_UNREAD_NOTIFICATIONS,
  FETCH_STATES_OF_COUNTRY,
  FETCH_CITIES_OF_STATE,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  VERIFY_RESET_PASSWORD,
  CHANGE_MEMBERSHIP_STATUS,
  MEMBERSHIP_PAY_ONLINE_V2,
  FETCH_MEMBER_NOTES,
  ADD_MEMBER_NOTES,
  EDIT_MEMBER_NOTES,
  DELETE_MEMBER_NOTES,
  FETCH_MEMBER_APPLICATION_STATE,
  ADD_APPLICATION_RECOMMENDATION,
  ADD_APPLICATION_RESUME,
  DELETE_APPLICATION_RECOMMENDATION,
  FETCH_ALL_RECOMMENDATIONS,
  SUBMIT_APPLICATION_FORM,
  DELETE_APPLICATION_RESUME,
  FETCH_ALL_MEMBERSHIP_LEVELS,
  APPLY_MEMBERSHIP_APPLICATION,
  ADD_APPLICATION_REQUIREMENTS,
  FETCH_APPLICATION_REQUIREMENTS,
  DELETE_APPLICATION_REQUIREMENTS,
  UPDATE_APPLICATION_REQUIREMENTS,
  ADD_EDUCATION_DETAILS,
  UPDATE_EDUCATION_DETAILS,
  DELETE_EDUCATION_DETAILS,
  ADD_APPLICATION_PRESENTATION,
  DELETE_APPLICATION_PRESENTATION,
  UPDATE_APPLICATION_PRESENTATION,
  FETCH_ADMIN_APPLICATION_STATE,
  FETCH_ADMIN_APPLICATION_REQUIREMENTS,
  FETCH_MEMBER_LEVEL_APPLICATION,
  FETCH_CREDENTIAL_APPLICATIONS,
  CHANGE_REQUIREMENT_DETAIL_STATUS,
  ACCEPT_CREDENTIALING_APPLICATION,
  REJECT_CREDENTIALING_APPLICATION,
  CHANGE_REQUIREMENT_STATUS,
  UPDATE_APPLICATION_REQUIREMENT_STATUS,
  NOTIFY_APPLICATION_RECOMMENDER,
  CHANGE_PRESENTATION_STATUS,
  CREDENTIALING_ACCEPT_RECOMMENDATION,
  CREDENTIALING_REJECT_RECOMMENDATION,
  UPDATE_RESUME_STATUS,
  GRANT_CREDENTIAL,
  GET_PRESIGNED_URL_FOR_FILES,
  CHARGE_CREDENTIAL_PAYMENTS,
  SELECT_EVENT_MEETING,
  DELETE_EVENT_MEETING,
  ADD_TEMPLATE,
  FETCH_TEMPLATES_LIST,
  DELETE_TEMPLATE,
  EDIT_TEMPLATE,
  ADD_SURVEY_QUESTION,
  EDIT_SURVEY_QUESTION,
  DELETE_SURVEY_QUESTION,
  COPY_SURVEY_QUESTION,
  ADD_TEMPLATE_QUESTION,
  EDIT_TEMPLATE_QUESTION,
  DELETE_TEMPLATE_QUESTION,
  COPY_TEMPLATE_QUESTION,
  COPY_TEMPLATE,
  FETCH_SINGLE_TEMPLATE,
  FETCH_SURVEY_RESULT,
  FETCH_SURVEY_DATA,
  ATTACH_SURVEY,
  FETCH_BADGE,
  DELETE_BADGE,
  ADD_BADGE,
  UPDATE_BADGE,
  ADD_SPONSORS,
  FETCH_SPONSORS,
  DELETE_SPONSORS,
  UPDATE_SPONSORS,
  ADD_EXHIBITOR,
  FETCH_EXHIBITOR,
  UPDATE_EXHIBITOR,
  FETCH_EVENT_BOOTHS,
  ADD_BOOTH_MAP,
  DELETE_BOOTH_MAP,
  FETCH_BOOTH_DETAIL,
  ADD_BOOTH_INFORMATION,
  UPDATE_BOOTH_INFORMATION,
  DELETE_BOOTH_INFORMATION,
  ADD_SPECIFIC_BOOTH,
  DELETE_SPECIFIC_BOOTH,
  FETCH_CEU_STATS,
  FETCH_CEU_CERTIS,
  FETCH_SPONSOR_PRIVILEGES_TEMPLATE,
  UPDATE_SPONSORSHIP,
  ADD_SPONSORSHIP,
  COPY_SPONSORSHIP,
  DELETE_SPONSORSHIP,
  FETCH_AFFILIATE_INVOICES,
  GENERATE_AFFILIATE_INVOICES,
  SAVE_AFFILIATE_CHEQUE_DETAILS,
  FETCH_ALL_CHEQUES,
  UPDATE_PARTICULAR_CHEQUE,
  CHANGE_PAYMENT_METHOD,
  GENERATE_MEMBER_OFFLINE_INVOICE,
  SAVE_MEMBER_CHEQUE_DETAILS,
  UPDATE_PARTICULAR_MEMBER_CHEQUE,
  CREATE_EVENT,
  FETCH_EVENT,
};

export default ROUTES;
