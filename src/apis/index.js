import client from "./client";
import apiClient from "./apiClient";
import ROUTES from "./routes";
import fileUploader from "./fileUploader"

export async function signUp(version = "v1", userDetails) {
  if (version === "v1") {
    return apiClient({
      method: ROUTES.SIGN_UP.METHOD,
      url: ROUTES.SIGN_UP.URL,
      data: userDetails,
    });
  }

  if (version === "v2") {
    return apiClient({
      method: ROUTES.SIGN_UP_V2.METHOD,
      url: ROUTES.SIGN_UP_V2.URL,
      data: userDetails,
    });
  }

  // Return default v1
  return client({
    method: ROUTES.SIGN_UP.METHOD,
    url: ROUTES.SIGN_UP.URL,
    data: userDetails,
  });
}

export async function signIn(data) {
  return apiClient({
    method: ROUTES.SIGN_IN.METHOD,
    url: ROUTES.SIGN_IN.URL,
    data: data,
  });
}

export async function applyForMembership(userId, data) {
  const url = ROUTES.MEMBERSHIP_APPLY.URL.replace(":userId", userId)
  return apiClient({
    method: ROUTES.MEMBERSHIP_APPLY.METHOD,
    url: url,
    data: data,
  });
}

export async function signOut() {
  return apiClient({
    method: ROUTES.SIGN_OUT.METHOD,
    url: ROUTES.SIGN_OUT.URL,
  });
}

export async function signUpInvite(data) {
  return apiClient({
    method: ROUTES.SIGN_UP_INVITE.METHOD,
    url: ROUTES.SIGN_UP_INVITE.URL,
    data: data,
  });
}

export async function membershipApply(userForm) {
  return client({
    method: ROUTES.MEMBERSHIP_APPLICATION.METHOD,
    url: ROUTES.MEMBERSHIP_APPLICATION.URL,
    data: userForm,
  });
}

export async function createUserGroup(group) {
  return apiClient({
    method: ROUTES.PEOPLE_CREATE_GROUP.METHOD,
    url: ROUTES.PEOPLE_CREATE_GROUP.URL,
    data: group,
  });
}

export async function deleteUserGroup({ id = "" } = {}) {
  const url = ROUTES.PEOPLE_DELETE_GROUP.URL.replace(":id", id);
  return client({
    method: ROUTES.PEOPLE_DELETE_GROUP.METHOD,
    url: url,
    data: {},
  });
}

export async function updateUserGroup(id, data) {
  const url = ROUTES.PEOPLE_UPDATE_GROUP.URL.replace(":id", id);
  return client({
    method: ROUTES.PEOPLE_UPDATE_GROUP.METHOD,
    url: url,
    data: data,
  });
}

export async function fetchAllGroups(filter = {}) {
  const url = ROUTES.PEOPLE_FETCH_ALL_GROUPS.URL;
  return apiClient({
    method: ROUTES.PEOPLE_FETCH_ALL_GROUPS.METHOD,
    url: url,
    params: filter,
  });
}

export async function sendCode(send) {
  return client({
    method: ROUTES.SEND_OTP.METHOD,
    url: ROUTES.SEND_OTP.URL,
    data: send,
  });
}

export async function searchMember(q) {
  const url = ROUTES.SEARCH_MEMBER.URL;
  return client({
    method: ROUTES.SEARCH_MEMBER.METHOD,
    url,
    params: {
      q,
    },
  });
}

export async function verifyCode(data) {
  return client({
    method: ROUTES.VERIFY_OTP.METHOD,
    url: ROUTES.VERIFY_OTP.URL,
    data: data,
  });
}
export async function fetchSingleGroup({ id = "" }) {
  const url = ROUTES.PEOPLE_FETCH_GROUP.URL.replace(":id", id);
  return client({
    method: ROUTES.PEOPLE_FETCH_GROUP.METHOD,
    url: url,
    data: {},
  });
}

export async function userInvites(data) {
  return apiClient({
    method: ROUTES.PEOPLE_INVITE_USERS.METHOD,
    url: ROUTES.PEOPLE_INVITE_USERS.URL,
    data: data,
  });
}

export async function getAllGroupMembers(id, pageNo, name) {
  let url = ROUTES.PEOPLE_FETCH_MEMBERS.URL.replace(":id", id);
  url = url.replace(":pgNo", pageNo);
  url = url.replace(":name", name);
  return apiClient({
    method: ROUTES.PEOPLE_FETCH_MEMBERS.METHOD,
    url: url,
    data: {},
  });
}

export async function fetchPastInvites(args) {
  return apiClient({
    method: ROUTES.PEOPLE_FETCH_PAST_INVITES.METHOD,
    url: ROUTES.PEOPLE_FETCH_PAST_INVITES.URL,
    params: args,
  });
}

export async function revokeInvite(inviteId) {
  const url = ROUTES.PEOPLE_REVOKE_INVITATION.URL.replace(":inviteId", inviteId);
  return apiClient({
    method: ROUTES.PEOPLE_REVOKE_INVITATION.METHOD,
    url: url,
    data: {},
  });
}

export async function resendInvitation(inviteId) {
  const url = ROUTES.PEOPLE_RESEND_INVITATION.URL.replace(":inviteId", inviteId);
  return apiClient({
    method: ROUTES.PEOPLE_RESEND_INVITATION.METHOD,
    url: url,
    data: {},
  });
}

export async function sendInviteViaLink(linkParams) {
  return apiClient({
    method: ROUTES.PEOPLE_SEND_INVITES_LINK.METHOD,
    url: ROUTES.PEOPLE_SEND_INVITES_LINK.URL,
    data: linkParams,
  });
}

export async function acceptInviteViaLink(acceptData) {
  return client({
    method: ROUTES.PEOPLE_ACCEPT_INVITES_LINK.METHOD,
    url: ROUTES.PEOPLE_ACCEPT_INVITES_LINK.URL,
    data: acceptData,
  });
}

export async function getEventPublicProfile(eventId) {
  const url = ROUTES.EVENTS_SPONSOR_PUBLIC_PROFILE.URL.replace(":id", eventId);
  return client({
    method: ROUTES.EVENTS_SPONSOR_PUBLIC_PROFILE.METHOD,
    url: url,
    data: {},
  });
}

export async function fetchEventSponsors(eventId) {
  const url = ROUTES.EVENTS_SPONSORS.URL.replace(":id", eventId);
  return client({
    method: ROUTES.EVENTS_SPONSORS.METHOD,
    url: url,
    data: {},
  });
}

export async function fetchEventExhibitors(eventId) {
  const url = ROUTES.EVENTS_EXHIBITORS.URL.replace(":id", eventId);
  return client({
    method: ROUTES.EVENTS_EXHIBITORS.METHOD,
    url: url,
    data: {},
  });
}

export async function getEventShortProfile({ eventId = "" }) {
  const url = ROUTES.EVENTS_FETCH_EVENTS_PROFILE.URL.replace(":id", eventId);
  return client({
    method: ROUTES.EVENTS_FETCH_EVENTS_PROFILE.METHOD,
    url: url,
    data: {},
  });
}

export async function fetchAllEventCards() {
  return client({
    method: ROUTES.EVENTS_FETCH_EVENTS_CARDS.METHOD,
    url: ROUTES.EVENTS_FETCH_EVENTS_CARDS.URL,
  });
}

export async function getCountriesList({ sort = true, sortBy = "name" } = {}) {
  const params = {};
  if (sort) {
    params.filter = JSON.stringify({ order: `${sortBy} ASC` });
  }

  return apiClient({
    method: ROUTES.PEOPLE_GET_COUNTRIES.METHOD,
    url: ROUTES.PEOPLE_GET_COUNTRIES.URL,
    params: params,
  });
}

export async function postRegion(region) {
  return apiClient({
    method: ROUTES.PEOPLE_ADD_REGION.METHOD,
    url: ROUTES.PEOPLE_ADD_REGION.URL,
    data: region,
  });
}

export async function getOneRegion(regionId) {
  const url = ROUTES.PEOPLE_GET_ONE_REGION.URL.replace(":regionId", regionId);
  return apiClient({
    method: ROUTES.PEOPLE_GET_ONE_REGION.METHOD,
    url: url,
    data: {},
  });
}

export async function getAllRegions() {
  return apiClient({
    method: ROUTES.PEOPLE_GET_ALL_REGIONS.METHOD,
    url: ROUTES.PEOPLE_GET_ALL_REGIONS.URL,
    data: {},
  });
}

export async function editRegion(regionId, region) {
  const url = ROUTES.PEOPLE_UPDATE_ONE_REGION.URL.replace(":regionId", regionId);
  return apiClient({
    method: ROUTES.PEOPLE_UPDATE_ONE_REGION.METHOD,
    url: url,
    data: region,
  });
}

export async function removeRegion(regionId) {
  const url = ROUTES.PEOPLE_DELETE_ONE_REGION.URL.replace(":regionId", regionId);
  return apiClient({
    method: ROUTES.PEOPLE_DELETE_ONE_REGION.METHOD,
    url: url,
    data: {},
  });
}

export async function postMembershipLevel(membershipLevel) {
  return apiClient({
    method: ROUTES.PEOPLE_ADD_MEMBERSHIP_LEVEL.METHOD,
    url: ROUTES.PEOPLE_ADD_MEMBERSHIP_LEVEL.URL,
    data: membershipLevel,
  });
}

export async function getOneMembershipLevel(membershipId) {
  const url = ROUTES.PEOPLE_GET_ONE_MEMBERSHIP_LEVEL.URL.replace(":membershipId", membershipId);
  return apiClient({
    method: ROUTES.PEOPLE_GET_ONE_MEMBERSHIP_LEVEL.METHOD,
    url: url,
    data: {},
  });
}

export async function getAllMembershipLevels() {
  return apiClient({
    method: ROUTES.PEOPLE_GET_ALL_MEMBERSHIP_LEVELS.METHOD,
    url: ROUTES.PEOPLE_GET_ALL_MEMBERSHIP_LEVELS.URL,
    data: {},
  });
}

export async function updateMembershipLevel(membershipId, membership) {
  const url = ROUTES.PEOPLE_UPDATE_ONE_MEMBERSHIP_LEVEL.URL.replace(":membershipId", membershipId);
  return apiClient({
    method: ROUTES.PEOPLE_UPDATE_ONE_MEMBERSHIP_LEVEL.METHOD,
    url: url,
    data: membership,
  });
}

export async function removeMembershipLevel(membershipId) {
  const url = ROUTES.PEOPLE_DELETE_ONE_MEMBERSHIP_LEVEL.URL.replace(":membershipId", membershipId);
  return apiClient({
    method: ROUTES.PEOPLE_DELETE_ONE_MEMBERSHIP_LEVEL.METHOD,
    url: url,
    data: {},
  });
}

export async function postMembershipType(type) {
  return apiClient({
    method: ROUTES.PEOPLE_ADD_MEMBERSHIP_TYPE.METHOD,
    url: ROUTES.PEOPLE_ADD_MEMBERSHIP_TYPE.URL,
    data: type,
  });
}

export async function getOneMembershipType(membershipId) {
  const url = ROUTES.PEOPLE_GET_ONE_MEMBERSHIP_TYPE.URL.replace(":membershipId", membershipId);
  return apiClient({
    method: ROUTES.PEOPLE_GET_ONE_MEMBERSHIP_TYPE.METHOD,
    url: url,
    data: {},
  });
}

export async function getAllMembershipType() {
  return apiClient({
    method: ROUTES.PEOPLE_GET_ALL_MEMBERSHIP_TYPE.METHOD,
    url: ROUTES.PEOPLE_GET_ALL_MEMBERSHIP_TYPE.URL,
    data: {},
  });
}

export async function updateMembershipType(membershipId, type) {
  const url = ROUTES.PEOPLE_UPDATE_ONE_MEMBERSHIP_TYPE.URL.replace(":membershipId", membershipId);
  return apiClient({
    method: ROUTES.PEOPLE_UPDATE_ONE_MEMBERSHIP_TYPE.METHOD,
    url: url,
    data: type,
  });
}

export async function removeMembershipTypes(membershipId) {
  const url = ROUTES.PEOPLE_DELETE_ONE_MEMBERSHIP_TYPE.URL.replace(":membershipId", membershipId);
  return apiClient({
    method: ROUTES.PEOPLE_DELETE_ONE_MEMBERSHIP_TYPE.METHOD,
    url: url,
    data: {},
  });
}
export async function postCoMembershipType(type) {
  return apiClient({
    method: ROUTES.PEOPLE_ADD_CO_MEMBERSHIP_TYPE.METHOD,
    url: ROUTES.PEOPLE_ADD_CO_MEMBERSHIP_TYPE.URL,
    data: type,
  });
}

export async function getOneCoMembershipType(membershipId) {
  const url = ROUTES.PEOPLE_GET_ONE_CO_MEMBERSHIP_TYPE.URL.replace(":membershipId", membershipId);
  return apiClient({
    method: ROUTES.PEOPLE_GET_ONE_CO_MEMBERSHIP_TYPE.METHOD,
    url: url,
    data: {}
  })
}

export async function getMemberProfile(memberId) {
  const url = ROUTES.PEOPLE_FETCH_MEMBER_PROFILE.URL.replace(":memberId", memberId)
  return apiClient({
    method: ROUTES.PEOPLE_FETCH_MEMBER_PROFILE.METHOD,
    url: url,
    data: {},
  });
}

export async function getAllCoMembershipType() {
  return apiClient({
    method: ROUTES.PEOPLE_GET_ALL_CO_MEMBERSHIP_TYPE.METHOD,
    url: ROUTES.PEOPLE_GET_ALL_CO_MEMBERSHIP_TYPE.URL,
    data: {},
  });
}

export async function updateCoMembershipType(membershipId, type) {
  const url = ROUTES.PEOPLE_UPDATE_ONE_CO_MEMBERSHIP_TYPE.URL.replace(":membershipId", membershipId);
  return apiClient({
    method: ROUTES.PEOPLE_UPDATE_ONE_CO_MEMBERSHIP_TYPE.METHOD,
    url: url,
    data: type,
  });
}

export async function removeCoMembershipType(membershipId) {
  const url = ROUTES.PEOPLE_DELETE_ONE_CO_MEMBERSHIP_TYPE.URL.replace(":membershipId", membershipId);
  return apiClient({
    method: ROUTES.PEOPLE_DELETE_ONE_CO_MEMBERSHIP_TYPE.METHOD,
    url: url,
    data: {},
  });
}

export async function getAllMembers(params) {
  return apiClient({
    method: ROUTES.PEOPLE_FETCH_ALL_MEMBERS.METHOD,
    url: ROUTES.PEOPLE_FETCH_ALL_MEMBERS.URL,
    params: params,
  });
}

export async function getAllInvites(params) {
  return apiClient({
    method: ROUTES.PEOPLE_FETCH_INVITE_LINKS.METHOD,
    url: ROUTES.PEOPLE_FETCH_INVITE_LINKS.URL,
    params: params,
  });
}

export async function postImplant(implant) {
  return apiClient({
    method: ROUTES.SETTINGS_IMPLANT_POST.METHOD,
    url: ROUTES.SETTINGS_IMPLANT_POST.URL,
    data: implant,
  });
}

export async function getOneImplant(id) {
  const url = ROUTES.SETTINGS_IMPLANT_GET_ONE.URL.replace(":id", id);
  return apiClient({
    method: ROUTES.SETTINGS_IMPLANT_GET_ONE.METHOD,
    url: url,
    data: {},
  });
}

export async function getAllImplants() {
  return apiClient({
    method: ROUTES.SETTINGS_IMPLANT_GET_ALL.METHOD,
    url: ROUTES.SETTINGS_IMPLANT_GET_ALL.URL,
    data: {},
  });
}

export async function updateImplant(id, implant) {
  const url = ROUTES.SETTINGS_IMPLANT_UPDATE.URL.replace(":id", id);
  return apiClient({
    method: ROUTES.SETTINGS_IMPLANT_UPDATE.METHOD,
    url: url,
    data: implant,
  });
}

export async function removeImplant(id) {
  const url = ROUTES.SETTINGS_IMPLANT_DELETE.URL.replace(":id", id);
  return apiClient({
    method: ROUTES.SETTINGS_IMPLANT_DELETE.METHOD,
    url: url,
    data: {},
  });
}

export async function postLabTech(labTech) {
  return apiClient({
    method: ROUTES.SETTINGS_LAB_TECH_POST.METHOD,
    url: ROUTES.SETTINGS_LAB_TECH_POST.URL,
    data: labTech,
  });
}

export async function getOneLabTech(id) {
  const url = ROUTES.SETTINGS_LAB_TECH_GET_ONE.URL.replace(":id", id);
  return apiClient({
    method: ROUTES.SETTINGS_LAB_TECH_GET_ONE.METHOD,
    url: url,
    data: {},
  });
}

export async function getAllLabTechs() {
  return apiClient({
    method: ROUTES.SETTINGS_LAB_TECH_GET_ALL.METHOD,
    url: ROUTES.SETTINGS_LAB_TECH_GET_ALL.URL,
    data: {},
  });
}

export async function editLabTech(id, labTechData) {
  const url = ROUTES.SETTINGS_LAB_TECH_UPDATE.URL.replace(":id", id);
  return apiClient({
    method: ROUTES.SETTINGS_LAB_TECH_UPDATE.METHOD,
    url: url,
    data: labTechData,
  });
}

export async function removeLabTech(id) {
  const url = ROUTES.SETTINGS_LAB_TECH_DELETE.URL.replace(":id", id);
  return apiClient({
    method: ROUTES.SETTINGS_LAB_TECH_DELETE.METHOD,
    url: url,
    data: {},
  });
}

export async function postAdvLabTech(advLabTech) {
  return apiClient({
    method: ROUTES.SETTINGS_ADV_LAB_TECH_POST.METHOD,
    url: ROUTES.SETTINGS_ADV_LAB_TECH_POST.URL,
    data: advLabTech,
  });
}

export async function getOneAdvLabTech(id) {
  const url = ROUTES.SETTINGS_ADV_LAB_TECH_GET_ONE.URL.replace(":id", id);
  return apiClient({
    method: ROUTES.SETTINGS_ADV_LAB_TECH_GET_ONE.METHOD,
    url: url,
    data: {},
  });
}

export async function getAllAdvLabTechs() {
  return apiClient({
    method: ROUTES.SETTINGS_ADV_LAB_TECH_GET_ALL.METHOD,
    url: ROUTES.SETTINGS_ADV_LAB_TECH_GET_ALL.URL,
    data: {},
  });
}

export async function editAdvLabTech(id, advLabTech) {
  const url = ROUTES.SETTINGS_ADV_LAB_TECH_UPDATE.URL.replace(":id", id);
  return apiClient({
    method: ROUTES.SETTINGS_ADV_LAB_TECH_UPDATE.METHOD,
    url: url,
    data: advLabTech,
  });
}

export async function removeAdvLabTech(id) {
  const url = ROUTES.SETTINGS_ADV_LAB_TECH_DELETE.URL.replace(":id", id);
  return apiClient({
    method: ROUTES.SETTINGS_ADV_LAB_TECH_DELETE.METHOD,
    url: url,
    data: {},
  });
}


export async function getShortProfileMembers(id) {
  const url = ROUTES.PEOPLE_FETCH_SHORT_PROFILE.URL.replace(":memberId", id);
  return apiClient({
    method: ROUTES.PEOPLE_FETCH_SHORT_PROFILE.METHOD,
    url: url,
  });
}

export async function postAffiliate(affiliateData) {
  return apiClient({
    method: ROUTES.SETTINGS_AFFILIATE_POST.METHOD,
    url: ROUTES.SETTINGS_AFFILIATE_POST.URL,
    data: affiliateData,
  });
}

export async function getAllAffiliates() {
  return apiClient({
    method: ROUTES.SETTINGS_AFFILIATE_GET_ALL.METHOD,
    url: ROUTES.SETTINGS_AFFILIATE_GET_ALL.URL,
    data: {},
  });
}

export async function editAffiliate(id, affiliateData) {
  const url = ROUTES.SETTINGS_AFFILIATE_UPDATE.URL.replace(":id", id);
  return apiClient({
    method: ROUTES.SETTINGS_AFFILIATE_UPDATE.METHOD,
    url: url,
    data: affiliateData,
  });
}

export async function removeAffiliate(id) {
  const url = ROUTES.SETTINGS_AFFILIATE_DELETE.URL.replace(":id", id);
  return apiClient({
    method: ROUTES.SETTINGS_AFFILIATE_DELETE.METHOD,
    url: url,
    data: {},
  });
}

export async function postMemberEducation(memberId, educationData) {
  let url = ROUTES.PEOPLE_ADD_MEMBER_EDUCATION.URL.replace(":memberId", memberId);
  return apiClient({
    method: ROUTES.PEOPLE_ADD_MEMBER_EDUCATION.METHOD,
    url: url,
    data: educationData,
  });
}

export async function editMemberEducation(memberId, educationId, educationData) {
  let url = ROUTES.PEOPLE_UPDATE_MEMBER_EDUCATION.URL.replace(":memberId", memberId);
  url = url.replace(":educationId", educationId);
  return apiClient({
    method: ROUTES.PEOPLE_UPDATE_MEMBER_EDUCATION.METHOD,
    url: url,
    data: educationData,
  });
}

export async function removeMemberEducation(memberId, educationId) {
  let url = ROUTES.PEOPLE_DELETE_MEMBER_EDUCATION.URL.replace(":memberId", memberId);
  url = url.replace(":educationId", educationId);
  return apiClient({
    method: ROUTES.PEOPLE_DELETE_MEMBER_EDUCATION.METHOD,
    url: url,
    data: {},
  });
}

export async function getGroupProfile(groupId) {
  let url = ROUTES.PEOPLE_GET_GROUP_FULL_PROFILE.URL.replace(":groupId", groupId);
  return apiClient({
    method: ROUTES.PEOPLE_GET_GROUP_FULL_PROFILE.METHOD,
    url: url,
    data: {},
  });
}

export async function editGroupProfile(groupId, groupData) {
  let url = ROUTES.PEOPLE_UPDATE_GROUP_PROFILE.URL.replace(":groupId", groupId);
  return apiClient({
    method: ROUTES.PEOPLE_UPDATE_GROUP_PROFILE.METHOD,
    url: url,
    data: groupData,
  });
}

export async function editMemberProfile(memberId, memberData) {
  let url = ROUTES.PEOPLE_UPDATE_MEMBER_PROFILE.URL.replace(":memberId", memberId);
  return apiClient({
    method: ROUTES.PEOPLE_UPDATE_MEMBER_PROFILE.METHOD,
    url: url,
    data: memberData,
  });
}

export async function editAffiliateProfile(affiliateId, affiliateData) {
  let url = ROUTES.PEOPLE_UPDATE_AFFILIATE_PROFILE.URL.replace(":affiliatesId", affiliateId);
  return apiClient({
    method: ROUTES.PEOPLE_UPDATE_AFFILIATE_PROFILE.METHOD,
    url: url,
    data: affiliateData,
  });
}

export async function getGroupStats() {
  return apiClient({
    method: ROUTES.PEOPLE_GET_GROUP_STATISTICS.METHOD,
    url: ROUTES.PEOPLE_GET_GROUP_STATISTICS.URL,
    data: {},
  });
}

export async function getUsersStats() {
  return apiClient({
    method: ROUTES.PEOPLE_GET_USER_STATISTICS.METHOD,
    url: ROUTES.PEOPLE_GET_USER_STATISTICS.URL,
    data: {},
  });
}

export async function getAllUsers(q, pageNo) {
  return apiClient({
    method: ROUTES.PEOPLE_FETCH_ALL_USERS.METHOD,
    url: ROUTES.PEOPLE_FETCH_ALL_USERS.URL,
    params: { q, pageNo }
  });
}

export async function postFeeSchedule(fee) {
  return apiClient({
    method: ROUTES.SETTINGS_POST_FEE_SCHEDULE.METHOD,
    url: ROUTES.SETTINGS_POST_FEE_SCHEDULE.URL,
    data: fee,
  });
}

export async function getFeeSchedule() {
  return apiClient({
    method: ROUTES.SETTINGS_GET_FEE_SCHEDULE.METHOD,
    url: ROUTES.SETTINGS_GET_FEE_SCHEDULE.URL,
    data: {},
  });
}

export async function editFeeSchedule(feeId, fee) {
  const url = ROUTES.SETTINGS_UPDATE_FEE_SCHEDULE.URL.replace(":feeId", feeId);
  return apiClient({
    method: ROUTES.SETTINGS_UPDATE_FEE_SCHEDULE.METHOD,
    url: url,
    data: fee,
  });
}

export async function removeFeeSchedule(feeId) {
  const url = ROUTES.SETTINGS_DELETE_FEE_SCHEDULE.URL.replace(":feeId", feeId);
  return apiClient({
    method: ROUTES.SETTINGS_DELETE_FEE_SCHEDULE.METHOD,
    url: url,
    data: {},
  });
}

export async function getAllPayments(params) {
  return apiClient({
    method: ROUTES.PAYMENTS_GET_ALL_PAYMENTS.METHOD,
    url: ROUTES.PAYMENTS_GET_ALL_PAYMENTS.URL,
    params: params,
  });
}

// mocking enabled
export async function getSpecificPayment(params) {
  const url = ROUTES.PAYMENTS_GET_SPECIFIC_PAYMENT.URL.replace(":paymentId", params.paymentId);
  // const url = ROUTES.APPLICATIONS_MEMBERSHIP_DETAILS.URL.replace(":id", params.paymentId)
  return apiClient({
    method: ROUTES.PAYMENTS_GET_SPECIFIC_PAYMENT.METHOD,
    // method: ROUTES.APPLICATIONS_MEMBERSHIP_DETAILS.METHOD,
    url: url,
  });
}

export async function membershipRenewalPayment(params, data) {
  let url = ROUTES.PAYMENTS_MEMBERSHIP_RENEWAL_CHARGE.URL.replace(":paymentId", params.paymentId);
  return apiClient({
    method: ROUTES.PAYMENTS_MEMBERSHIP_RENEWAL_CHARGE.METHOD,
    url, data,
  });
}

export async function getUpcomingPayments(params) {
  return apiClient({
    method: ROUTES.PAYMENTS_GET_UPCOMING_PAYMENTS.METHOD,
    url: ROUTES.PAYMENTS_GET_UPCOMING_PAYMENTS.URL,
    params: params,
  });
}

export async function getOutstandingPayments(params) {
  return apiClient({
    method: ROUTES.PAYMENTS_GET_OUTSTANDING_PAYMENTS.METHOD,
    url: ROUTES.PAYMENTS_GET_OUTSTANDING_PAYMENTS.URL,
    params: params,
  });
}

export async function getpaymentStats(params) {
  return apiClient({
    method: ROUTES.PAYMENTS_GET_STATISTICS_PAYMENTS.METHOD,
    url: ROUTES.PAYMENTS_GET_STATISTICS_PAYMENTS.URL,
    params: params,
  });
}

export async function getAccountStats(params) {
  return apiClient({
    method: ROUTES.PAYMENTS_GET_STATISTICS_ACCOUNTS.METHOD,
    url: ROUTES.PAYMENTS_GET_STATISTICS_ACCOUNTS.URL,
    params: params,
  });
}

export async function sendPaymentReminder(paymentId, data) {
  const url = ROUTES.PAYMENTS_SEND_REMINDER.URL.replace(":paymentId", paymentId);
  return apiClient({
    method: ROUTES.PAYMENTS_SEND_REMINDER.METHOD,
    url,
    data,
  });
}

export async function getUserActivities(userId, params) {
  const url = ROUTES.USERS_GET_ACCOUNT_ACTIVITIES.URL.replace(":userId", userId);
  return apiClient({
    method: ROUTES.USERS_GET_ACCOUNT_ACTIVITIES.METHOD,
    url,
    params,
  });
}

export async function getAffiliatePayments(params) {
  return apiClient({
    method: ROUTES.PEOPLE_GET_AFFILIATES_PAYMENT.METHOD,
    url: ROUTES.PEOPLE_GET_AFFILIATES_PAYMENT.URL,
    params,
  });
}

export async function getRevenueGraphData(params) {
  return apiClient({
    method: ROUTES.PEOPLE_GET_REVENUE_GRAPH.METHOD,
    url: ROUTES.PEOPLE_GET_REVENUE_GRAPH.URL,
    params,
  });
}

export async function postPaymentReminder(memberId) {
  const url = ROUTES.PEOPLE_SEND_PAYMENT_REMINDER.URL.replace(":memberId", memberId);
  return apiClient({
    method: ROUTES.PEOPLE_SEND_PAYMENT_REMINDER.METHOD,
    url: url,
  });
}

export async function verifyInvitation(invitationId, data) {
  const url = ROUTES.VERIFY_INVITATION.URL.replace(":invitationId", invitationId);
  return apiClient({
    method: ROUTES.VERIFY_INVITATION.METHOD,
    url: url,
    data,
  });
}

export async function setAccountPassword(data) {
  const url = ROUTES.SET_ACCOUNT_PASSWORD.URL;
  return apiClient({
    method: ROUTES.SET_ACCOUNT_PASSWORD.METHOD,
    url: url,
    data,
  });
}

export async function userChangeRole(userId, data) {
  const url = ROUTES.CHANGE_USER_ROLE.URL.replace(":userId", userId);
  return apiClient({
    method: ROUTES.CHANGE_USER_ROLE.METHOD,
    url: url,
    data
  });
}

export async function userDeactivate(userId, data) {
  const url = ROUTES.DEACTIVATE_A_USER.URL.replace(":userId", userId);
  return apiClient({
    method: ROUTES.DEACTIVATE_A_USER.METHOD,
    url: url,
    data
  });
}

export async function fetchSpecificMemberPayments(userId, data) {
  const url = ROUTES.FETCH_MEMBER_TRANSACTIONS.URL.replace(":userId", userId);
  return apiClient({
    method: ROUTES.FETCH_MEMBER_TRANSACTIONS.METHOD,
    url: url,
    params: data,
  });
}

export async function addMemberAddress(memberId, address) {
  const url = ROUTES.PEOPLE_ADD_MEMBER_ADDRESS.URL.replace(":memberId", memberId);
  return apiClient({
    method: ROUTES.PEOPLE_ADD_MEMBER_ADDRESS.METHOD,
    url: url,
    data: address,
  });
}

export async function updateMemberAddress(memberId, addressId, address) {
  let url = ROUTES.PEOPLE_UPDATE_MEMBER_ADDRESS.URL.replace(":memberId", memberId);
  url = url.replace(":addressId", addressId);
  return apiClient({
    method: ROUTES.PEOPLE_UPDATE_MEMBER_ADDRESS.METHOD,
    url: url,
    data: address,
  });
}

export async function deleteMemberAddress(memberId, addressId) {
  let url = ROUTES.PEOPLE_DELETE_MEMBER_ADDRESS.URL.replace(":memberId", memberId);
  url = url.replace(":addressId", addressId);
  return apiClient({
    method: ROUTES.PEOPLE_DELETE_MEMBER_ADDRESS.METHOD,
    url: url,
    data: {},
  });
}

export async function checkMemberExistence(params, data) {
  return apiClient({
    method: ROUTES.MEMBERSHIP_MEMBER_EXIST_CHECK.METHOD,
    url: ROUTES.MEMBERSHIP_MEMBER_EXIST_CHECK.URL,
    params: params,
    data: data,
  });
}

export async function createMemberAdmin(data) {
  return apiClient({
    method: ROUTES.MEMBERSHIP_CREATE_MEMBER.METHOD,
    url: ROUTES.MEMBERSHIP_CREATE_MEMBER.URL,
    data: data,
  });
}

export async function memberApplicationDetails(id) {
  const url = ROUTES.APPLICATIONS_MEMBERSHIP_DETAILS.URL.replace(":id", id);
  return client({
    method: ROUTES.APPLICATIONS_MEMBERSHIP_DETAILS.METHOD,
    url: url,
    data: {},
  });
}

export async function membershipApplicationCharge(params, data) {
  let url = ROUTES.PAYMENTS_MEMBERSHIP_APPLICATION_CHARGE.URL.replace(":paymentId", params.paymentId);
  return apiClient({
    method: ROUTES.PAYMENTS_MEMBERSHIP_APPLICATION_CHARGE.METHOD,
    url, data,
  });
}

export async function getMembershipTypesInRegion(params) {
  return apiClient({
    method: ROUTES.MEMBERSHIP_TYPE_AVAIL_IN_REGION.METHOD,
    url: ROUTES.MEMBERSHIP_TYPE_AVAIL_IN_REGION.URL,
    params: params,
  });
}

export async function fetchSpecificMemberPaymentHistory(userId, data) {
  const url = ROUTES.FETCH_MEMBER_PAYMENT_HISTORY.URL.replace(":userId", userId);
  return apiClient({
    method: ROUTES.FETCH_MEMBER_PAYMENT_HISTORY.METHOD,
    url: url,
    params: data,
  });
}

export async function newMemberSetPass(data) {
  return apiClient({
    method: ROUTES.MEMBERSHIP_NEW_SET_PASSWORD.METHOD,
    url: ROUTES.MEMBERSHIP_NEW_SET_PASSWORD.URL,
    data: data,
  });
}

export async function fetchSpecificMemberUpcomingPayments(userId, data) {
  const url = ROUTES.FETCH_MEMBER_UPCOMING_PAYMENTS.URL.replace(":userId", userId);
  return apiClient({
    method: ROUTES.FETCH_MEMBER_UPCOMING_PAYMENTS.METHOD,
    url: url,
    params: data,
  });
}

export async function fetchAllNotifications(userId, params) {
  const url = ROUTES.FETCH_ALL_NOTIFICATIONS.URL.replace(":userId", userId);
  return apiClient({
    method: ROUTES.FETCH_ALL_NOTIFICATIONS.METHOD,
    url: url,
    params,
  });
}

export async function fetchAllUnreadNotifications(userId, params) {
  const url = ROUTES.FETCH_ALL_UNREAD_NOTIFICATIONS.URL.replace(":userId", userId);
  return apiClient({
    method: ROUTES.FETCH_ALL_UNREAD_NOTIFICATIONS.METHOD,
    url: url,
    params,
  });
}

export async function getStatesOfCountry(countryId) {
  const url = ROUTES.FETCH_STATES_OF_COUNTRY.URL.replace(":countryId", countryId);
  return apiClient({
    method: ROUTES.FETCH_STATES_OF_COUNTRY.METHOD,
    url: url,
  });
}

export async function getCitiesOfState(stateId) {
  const url = ROUTES.FETCH_CITIES_OF_STATE.URL.replace(":stateId", stateId);
  return apiClient({
    method: ROUTES.FETCH_CITIES_OF_STATE.METHOD,
    url: url,
  });
}

export async function forgotPasswordEmail(params) {
  return apiClient({
    method: ROUTES.FORGOT_PASSWORD.METHOD,
    url: ROUTES.FORGOT_PASSWORD.URL,
    data: params,
  });
}

export async function passwordReset(params) {
  return apiClient({
    method: ROUTES.RESET_PASSWORD.METHOD,
    url: ROUTES.RESET_PASSWORD.URL,
    data: params,
  });
}

export async function verifyPasswordReset(params) {
  return apiClient({
    method: ROUTES.VERIFY_RESET_PASSWORD.METHOD,
    url: ROUTES.VERIFY_RESET_PASSWORD.URL,
    data: params,
  });
}

export async function changeMembershipStatus(userId, params) {
  const url = ROUTES.CHANGE_MEMBERSHIP_STATUS.URL.replace(":userId", userId);
  return apiClient({
    method: ROUTES.CHANGE_MEMBERSHIP_STATUS.METHOD,
    url: url,
    data: params
  });
}

export async function membershipApplicationV2(userId, data) {
  const url = ROUTES.MEMBERSHIP_PAY_ONLINE_V2.URL.replace(":userId", userId);
  return apiClient({
    method: ROUTES.MEMBERSHIP_PAY_ONLINE_V2.METHOD,
    url: url,
    data: data
  });
}

export async function fetchSpecificMemberNotes(userId, data) {
  const url = ROUTES.FETCH_MEMBER_NOTES.URL.replace(":userId", userId);
  return apiClient({
    method: ROUTES.FETCH_MEMBER_NOTES.METHOD,
    url: url,
    params: data
  });
}

export async function addMemberNotes(userId, data) {
  const url = ROUTES.ADD_MEMBER_NOTES.URL.replace(":userId", userId);
  return apiClient({
    method: ROUTES.ADD_MEMBER_NOTES.METHOD,
    url: url,
    data: data
  });
}

export async function editMemberNotes(id, data) {
  const url = ROUTES.EDIT_MEMBER_NOTES.URL.replace(":noteId", id);
  return apiClient({
    method: ROUTES.EDIT_MEMBER_NOTES.METHOD,
    url: url,
    data: data
  });
}

export async function deleteMemberNotes(id) {
  const url = ROUTES.DELETE_MEMBER_NOTES.URL.replace(":noteId", id);
  return apiClient({
    method: ROUTES.DELETE_MEMBER_NOTES.METHOD,
    url: url,
  });
}

export async function fetchMemberApplicationState(applicationId) {
  const url = ROUTES.FETCH_MEMBER_APPLICATION_STATE.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.FETCH_MEMBER_APPLICATION_STATE.METHOD,
    url: url,
  });
}

export async function addApplicationRecommendation(applicationId, data) {
  const url = ROUTES.ADD_APPLICATION_RECOMMENDATION.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.ADD_APPLICATION_RECOMMENDATION.METHOD,
    url: url,
    data: data,
  });
}

export async function uploadApplicationResume(applicationId, data) {
  const url = ROUTES.ADD_APPLICATION_RESUME.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.ADD_APPLICATION_RESUME.METHOD,
    url: url,
    data: data,
  });
}

export async function uploadApplicationPresentations(applicationId, data) {
  const url = ROUTES.ADD_APPLICATION_PRESENTATION.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.ADD_APPLICATION_PRESENTATION.METHOD,
    url: url,
    data: data,
  });
}

export async function deleteApplicationRecommendation(applicationId, data) {
  const url = ROUTES.DELETE_APPLICATION_RECOMMENDATION.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.DELETE_APPLICATION_RECOMMENDATION.METHOD,
    url: url,
    data: data,
  });
}

export async function getAllRecommendations(params) {
  const url = ROUTES.FETCH_ALL_RECOMMENDATIONS.URL.replace(":membershipLevelId", params.membershipLevelId);
  return apiClient({
    method: ROUTES.FETCH_ALL_RECOMMENDATIONS.METHOD,
    url: url,
    params: params,
  });
}

export async function submitCredentialApplicationForm(applicationId) {
  const url = ROUTES.SUBMIT_APPLICATION_FORM.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.SUBMIT_APPLICATION_FORM.METHOD,
    url: url,
  });
}

export async function deleteApplicationResume(applicationId, data) {
  const url = ROUTES.DELETE_APPLICATION_RESUME.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.DELETE_APPLICATION_RESUME.METHOD,
    url: url,
    data: data,
  });
}

export async function deleteApplicationPresentation(applicationId, data) {
  const url = ROUTES.DELETE_APPLICATION_PRESENTATION.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.DELETE_APPLICATION_PRESENTATION.METHOD,
    url: url,
    data: data,
  });
}

export async function updateApplicationPresentation(applicationId, data) {
  const url = ROUTES.UPDATE_APPLICATION_PRESENTATION.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.UPDATE_APPLICATION_PRESENTATION.METHOD,
    url: url,
    data: data,
  });
}

export async function fetchMembershipLevels() {
  return apiClient({
    method: ROUTES.FETCH_ALL_MEMBERSHIP_LEVELS.METHOD,
    url: ROUTES.FETCH_ALL_MEMBERSHIP_LEVELS.URL,
  })
}

export async function membershipLevelApplication(id) {
  const url = ROUTES.APPLY_MEMBERSHIP_APPLICATION.URL.replace(":membershipLevelId", id);
  return apiClient({
    method: ROUTES.APPLY_MEMBERSHIP_APPLICATION.METHOD,
    url: url
  })
}

export async function addApplicationRequirements(applicationId, requirementId, data) {
  let url = ROUTES.ADD_APPLICATION_REQUIREMENTS.URL.replace(":applicationId", applicationId);
  url = url.replace(":requirementId", requirementId);
  return apiClient({
    method: ROUTES.ADD_APPLICATION_REQUIREMENTS.METHOD,
    url: url,
    data: data
  })
}

export async function addEducationDetails(applicationId, requirementId, data) {
  let url = ROUTES.ADD_EDUCATION_DETAILS.URL.replace(":applicationId", applicationId);
  url = url.replace(":requirementId", requirementId)
  return apiClient({
    method: ROUTES.APPLY_MEMBERSHIP_APPLICATION.METHOD,
    url: url,
    data: data
  })
}

export async function fetchApplicationCurrentRequirements(applicationId, data) {
  let url = ROUTES.FETCH_APPLICATION_REQUIREMENTS.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.FETCH_APPLICATION_REQUIREMENTS.METHOD,
    url: url,
    params: data,
  });
}

export async function deleteApplicationRequirement(applicationId, data) {
  const url = ROUTES.DELETE_APPLICATION_REQUIREMENTS.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.DELETE_APPLICATION_REQUIREMENTS.METHOD,
    url: url,
    data: data,
  });
}

export async function updateApplicationRequirements(applicationId, data) {
  const url = ROUTES.UPDATE_APPLICATION_REQUIREMENTS.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.UPDATE_APPLICATION_REQUIREMENTS.METHOD,
    url: url,
    data: data,
  });
}

export async function updateEducationDetails(applicationId, data) {
  let url = ROUTES.UPDATE_EDUCATION_DETAILS.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.UPDATE_EDUCATION_DETAILS.METHOD,
    url: url,
    data: data
  })
}

export async function deleteEducationDetails(applicationId, data) {
  let url = ROUTES.DELETE_EDUCATION_DETAILS.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.DELETE_EDUCATION_DETAILS.METHOD,
    url: url,
    data: data
  })
}

export async function fetchApplicationState(applicationId) {
  const url = ROUTES.FETCH_ADMIN_APPLICATION_STATE.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.FETCH_ADMIN_APPLICATION_STATE.METHOD,
    url: url,
  });
}

export async function fetchAdminApplicationCurrentRequirements(applicationId, data) {
  let url = ROUTES.FETCH_ADMIN_APPLICATION_REQUIREMENTS.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.FETCH_ADMIN_APPLICATION_REQUIREMENTS.METHOD,
    url: url,
    params: data,
  });
}

export async function fetchMemberLevelApplication() {
  return apiClient({
    method: ROUTES.FETCH_MEMBER_LEVEL_APPLICATION.METHOD,
    url: ROUTES.FETCH_MEMBER_LEVEL_APPLICATION.URL
  })
}

export async function fetchCredentialApplications(params) {
  return apiClient({
    method: ROUTES.FETCH_CREDENTIAL_APPLICATIONS.METHOD,
    url: ROUTES.FETCH_CREDENTIAL_APPLICATIONS.URL,
    params: params
  })
}
export async function changeRequirementDetailStatus(applicationId, data) {
  let url = ROUTES.CHANGE_REQUIREMENT_DETAIL_STATUS.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.CHANGE_REQUIREMENT_DETAIL_STATUS.METHOD,
    url: url,
    data: data,
  });
}

export async function acceptCredentialingApplication(applicationId) {
  let url = ROUTES.ACCEPT_CREDENTIALING_APPLICATION.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.ACCEPT_CREDENTIALING_APPLICATION.METHOD,
    url: url,
  });
}

export async function rejectCredentialingApplication(applicationId, data) {
  let url = ROUTES.REJECT_CREDENTIALING_APPLICATION.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.REJECT_CREDENTIALING_APPLICATION.METHOD,
    url: url,
    data: data
  });
}

export async function changeRequirementStatus(applicationId, data) {
  let url = ROUTES.CHANGE_REQUIREMENT_STATUS.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.CHANGE_REQUIREMENT_STATUS.METHOD,
    url: url,
    data: data,
  });
}

export async function updateApplicationRequirementStatus(applicationId, data) {
  let url = ROUTES.UPDATE_APPLICATION_REQUIREMENT_STATUS.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.UPDATE_APPLICATION_REQUIREMENT_STATUS.METHOD,
    url: url,
    data: data,
  });
}

export async function notifyApplicationRecommender(applicationId, data) {
  let url = ROUTES.NOTIFY_APPLICATION_RECOMMENDER.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.NOTIFY_APPLICATION_RECOMMENDER.METHOD,
    url: url,
    data: data,
  });
}

export async function changeApplicationPresentationStatus(applicationId, data) {
  let url = ROUTES.CHANGE_PRESENTATION_STATUS.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.CHANGE_PRESENTATION_STATUS.METHOD,
    url: url,
    data: data,
  });
}

export async function approveReco(applicationId, recoBody) {
  const url = ROUTES.CREDENTIALING_ACCEPT_RECOMMENDATION.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.CREDENTIALING_ACCEPT_RECOMMENDATION.METHOD,
    url: url,
    data: recoBody,
  });
}

export async function rejectReco(applicationId, recoBody) {
  const url = ROUTES.CREDENTIALING_REJECT_RECOMMENDATION.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.CREDENTIALING_REJECT_RECOMMENDATION.METHOD,
    url: url,
    data: recoBody,
  });
}

export async function updateApplicationResumeStatus(applicationId, data) {
  let url = ROUTES.UPDATE_RESUME_STATUS.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.UPDATE_RESUME_STATUS.METHOD,
    url: url,
    data: data,
  });
}

export async function grantCredentials(applicationId) {
  let url = ROUTES.GRANT_CREDENTIAL.URL.replace(":applicationId", applicationId);
  return apiClient({
    method: ROUTES.GRANT_CREDENTIAL.METHOD,
    url: url,
  });
}

export async function getPresignedUrl(params) {
  return apiClient({
    method: ROUTES.GET_PRESIGNED_URL_FOR_FILES.METHOD,
    url: ROUTES.GET_PRESIGNED_URL_FOR_FILES.URL,
    params: params
  })
}

export async function uploadFiles(url, params) {
  return fileUploader({
    method: "PUT",
    headers: {
      "Content-Type": params.contentType,
      "x-amz-acl": "public-read"
    },
    url: url,
    data: params.file
  })
}

export async function credentialPayments(applicationId, params) {
  let url = ROUTES.CHARGE_CREDENTIAL_PAYMENTS.URL.replace(":applicationId", applicationId)
  return apiClient({
    method: ROUTES.CHARGE_CREDENTIAL_PAYMENTS.METHOD,
    url: url,
    data: params
  })
}

export async function selectEventMeeting(applicationId, params) {
  let url = ROUTES.SELECT_EVENT_MEETING.URL.replace(":applicationId", applicationId)
  return apiClient({
    method: ROUTES.SELECT_EVENT_MEETING.METHOD,
    url: url,
  })
}

export async function addTemplate(params) {
  return apiClient({
    method: ROUTES.ADD_TEMPLATE.METHOD,
    url: ROUTES.ADD_TEMPLATE.URL,
    data: params
  })
}

export async function deleteEventMeeting(applicationId) {
  let url = ROUTES.DELETE_EVENT_MEETING.URL.replace(":applicationId", applicationId)
  return apiClient({
    method: ROUTES.DELETE_EVENT_MEETING.METHOD,
    url: url,
  })
}

export async function fetchSurveyTemplatesList(data) {
  return apiClient({
    method: ROUTES.FETCH_TEMPLATES_LIST.METHOD,
    url: ROUTES.FETCH_TEMPLATES_LIST.URL,
    params: data,
  })
}

export async function deleteTemplate(templateId) {
  let url = ROUTES.DELETE_TEMPLATE.URL.replace(":templateId", templateId)
  return apiClient({
    method: ROUTES.DELETE_TEMPLATE.METHOD,
    url: url,
  })
}

export async function copySingleTemplate(templateId) {
  let url = ROUTES.COPY_TEMPLATE.URL.replace(":templateId", templateId)
  return apiClient({
    method: ROUTES.COPY_TEMPLATE.METHOD,
    url: url,
  })
}

export async function fetchSingleTemplate(templateId, data) {
  let url = ROUTES.FETCH_SINGLE_TEMPLATE.URL.replace(":templateId", templateId)
  return apiClient({
    method: ROUTES.FETCH_SINGLE_TEMPLATE.METHOD,
    url: url,
    params: data,
  })
}

export async function editTemplates(templateId, data) {
  let url = ROUTES.EDIT_TEMPLATE.URL.replace(":templateId", templateId)
  return apiClient({
    method: ROUTES.EDIT_TEMPLATE.METHOD,
    url: url,
    data: data,
  })
}

export async function addQuestion(templateId, data) {
  let url = ROUTES.ADD_TEMPLATE_QUESTION.URL.replace(":templateId", templateId)
  return apiClient({
    method: ROUTES.ADD_TEMPLATE_QUESTION.METHOD,
    url: url,
    data: data,
  })
}

export async function deleteQuestion(templateId, data) {
  let url = ROUTES.DELETE_TEMPLATE_QUESTION.URL.replace(":templateId", templateId)
  return apiClient({
    method: ROUTES.DELETE_TEMPLATE_QUESTION.METHOD,
    url: url,
    data: data,
  })
}

export async function editQuestion(templateId, data) {
  let url = ROUTES.EDIT_TEMPLATE_QUESTION.URL.replace(":templateId", templateId)
  return apiClient({
    method: ROUTES.EDIT_TEMPLATE_QUESTION.METHOD,
    url: url,
    data: data,
  })
}

export async function copyQuestion(templateId, data) {
  let url = ROUTES.COPY_TEMPLATE_QUESTION.URL.replace(":templateId", templateId)
  return apiClient({
    method: ROUTES.COPY_TEMPLATE_QUESTION.METHOD,
    url: url,
    data: data,
  })
}

export async function addEventSurveyQuestion(surveyId, data) {
  let url = ROUTES.ADD_SURVEY_QUESTION.URL.replace(":surveyId", surveyId)
  return apiClient({
    method: ROUTES.ADD_SURVEY_QUESTION.METHOD,
    url: url,
    data: data,
  })
}

export async function deleteEventSurveyQuestion(surveyId, data) {
  let url = ROUTES.DELETE_SURVEY_QUESTION.URL.replace(":surveyId", surveyId)
  return apiClient({
    method: ROUTES.DELETE_SURVEY_QUESTION.METHOD,
    url: url,
    data: data,
  })
}

export async function editEventSurveyQuestion(surveyId, data) {
  let url = ROUTES.EDIT_SURVEY_QUESTION.URL.replace(":surveyId", surveyId)
  return apiClient({
    method: ROUTES.EDIT_SURVEY_QUESTION.METHOD,
    url: url,
    data: data,
  })
}

export async function copyEventSurveyQuestion(surveyId, data) {
  let url = ROUTES.COPY_SURVEY_QUESTION.URL.replace(":surveyId", surveyId)
  return apiClient({
    method: ROUTES.COPY_SURVEY_QUESTION.METHOD,
    url: url,
    data: data,
  })
}

export async function getSurveyResults(surveyId) {
  let url = ROUTES.FETCH_SURVEY_RESULT.URL.replace(":surveyResultId", surveyId)
  return apiClient({
    method: ROUTES.FETCH_SURVEY_RESULT.METHOD,
    url: url
  })
}

export async function fetchSurveyDetails(surveyId) {
  let url = ROUTES.FETCH_SURVEY_DATA.URL.replace(":surveyId", surveyId)
  return apiClient({
    method: ROUTES.FETCH_SURVEY_DATA.METHOD,
    url: url,
  })
}

export async function attachSurvey(surveyId, data) {
  let url = ROUTES.ATTACH_SURVEY.URL.replace(":surveyId", surveyId)
  return apiClient({
    method: ROUTES.ATTACH_SURVEY.METHOD,
    url: url,
    data: data,
  })
}

export async function fetchAllBadges(eventId) {
  let url = ROUTES.FETCH_BADGE.URL.replace(":eventId", eventId);
  return apiClient({
    method: ROUTES.FETCH_BADGE.METHOD,
    url: url
  })
}

export async function deleteABadge(eventId, data) {
  let url = ROUTES.DELETE_BADGE.URL.replace(":eventId", eventId);
  return apiClient({
    method: ROUTES.DELETE_BADGE.METHOD,
    url: url,
    data: data
  })
}

export async function addABadge(eventId, data) {
  let url = ROUTES.ADD_BADGE.URL.replace(":eventId", eventId);
  return apiClient({
    method: ROUTES.ADD_BADGE.METHOD,
    url: url,
    data: data
  })
}

export async function editBadge(eventId, data) {
  let url = ROUTES.UPDATE_BADGE.URL.replace(":eventId", eventId);
  return apiClient({
    method: ROUTES.UPDATE_BADGE.METHOD,
    url: url,
    data: data
  })
}

export async function addSponsorship(eventId, data) {
  let url = ROUTES.ADD_SPONSORS.URL.replace(":eventId", eventId);
  return client({
    method: ROUTES.ADD_SPONSORS.METHOD,
    url: url,
    data: data
  })
}

export async function fetchSponsorship(eventId) {
  let url = ROUTES.FETCH_SPONSORS.URL.replace(":eventId", eventId);
  return client({
    method: ROUTES.FETCH_SPONSORS.METHOD,
    url: url
  })
}

export async function deleteSponsorship(eventId, data) {
  let url = ROUTES.DELETE_SPONSORS.URL.replace(":eventId", eventId);
  return client({
    method: ROUTES.DELETE_SPONSORS.METHOD,
    url: url,
    data: data
  })
}

export async function updateSponsorship(eventId, data) {
  let url = ROUTES.UPDATE_SPONSORS.URL.replace(":eventId", eventId);
  return client({
    method: ROUTES.UPDATE_SPONSORS.METHOD,
    url: url,
    data: data
  })
}

export async function addExhibitorship(eventId, data) {
  let url = ROUTES.ADD_EXHIBITOR.URL.replace(":eventId", eventId);
  return client({
    method: ROUTES.ADD_EXHIBITOR.METHOD,
    url: url,
    data: data
  })
}

export async function fetchExhibitorship(eventId) {
  let url = ROUTES.FETCH_EXHIBITOR.URL.replace(":eventId", eventId);
  return client({
    method: ROUTES.FETCH_EXHIBITOR.METHOD,
    url: url,
  })
}

export async function updateExhibitorship(eventId, data) {
  let url = ROUTES.UPDATE_EXHIBITOR.URL.replace(":eventId", eventId);
  return client({
    method: ROUTES.UPDATE_EXHIBITOR.METHOD,
    url: url,
    data: data,
  })
}

export async function fetchBooths(eventId, data) {
  let url = ROUTES.FETCH_EVENT_BOOTHS.URL.replace(":eventId", eventId)
  return client({
    method: ROUTES.FETCH_EVENT_BOOTHS.METHOD,
    url: url,
    params: data,
  })
}

export async function addMaps(eventId, data) {
  let url = ROUTES.ADD_BOOTH_MAP.URL.replace(":eventId", eventId);
  return client({
    method: ROUTES.ADD_BOOTH_MAP.METHOD,
    url: url,
    data: data,
  })
}

export async function deleteMaps(eventId, data) {
  let url = ROUTES.DELETE_BOOTH_MAP.URL.replace(":eventId", eventId);
  return client({
    method: ROUTES.DELETE_BOOTH_MAP.METHOD,
    url: url,
    data: data
  })
}

export async function fetchBoothsDetail(eventId) {
  let url = ROUTES.FETCH_BOOTH_DETAIL.URL.replace(":eventId", eventId);
  return client({
    method: ROUTES.FETCH_BOOTH_DETAIL.METHOD,
    url: url
  })
}

export async function addBoothInformation(data) {
  return client({
    method: ROUTES.ADD_BOOTH_INFORMATION.METHOD,
    url: ROUTES.ADD_BOOTH_INFORMATION.URL,
    data: data
  })
}

export async function updateBoothInformation(groupId, data) {
  let url = ROUTES.UPDATE_BOOTH_INFORMATION.URL.replace(":groupId", groupId);
  return client({
    method: ROUTES.UPDATE_BOOTH_INFORMATION.METHOD,
    url: url,
    data: data
  })
}

export async function deleteBoothInformation(groupId, data) {
  let url = ROUTES.DELETE_BOOTH_INFORMATION.URL.replace(":groupId", groupId);
  return client({
    method: ROUTES.DELETE_BOOTH_INFORMATION.METHOD,
    url: url,
    data: data
  })
}

export async function addSpecificBoothNumber(data) {
  return client({
    method: ROUTES.ADD_SPECIFIC_BOOTH.METHOD,
    url: ROUTES.ADD_SPECIFIC_BOOTH.URL,
    data: data
  })
}

export async function deleteSpecificBoothNumber(data) {
  return client({
    method: ROUTES.DELETE_SPECIFIC_BOOTH.METHOD,
    url: ROUTES.DELETE_SPECIFIC_BOOTH.URL,
    data: data
  })
}

export async function fetchCeuStats(userId) {
  let url = ROUTES.FETCH_CEU_STATS.URL.replace(":userId", "me");
  return apiClient({
    method: ROUTES.FETCH_CEU_STATS.METHOD,
    url: url,
  })
}

export async function fetchCeuCertis(userId, params) {
  let url = ROUTES.FETCH_CEU_CERTIS.URL.replace(":userId", "me");
  return apiClient({
    method: ROUTES.FETCH_CEU_CERTIS.METHOD,
    url: url,
    params: params
  })
}

export async function fetchSponsorPrivelegesTemplate() {
  return apiClient({
    method: ROUTES.FETCH_SPONSOR_PRIVILEGES_TEMPLATE.METHOD,
    url: ROUTES.FETCH_SPONSOR_PRIVILEGES_TEMPLATE.URL,
  })
}

export async function updateSponsorshipType(sponsorshipId, params) {
  let url = ROUTES.UPDATE_SPONSORSHIP.URL.replace(":sponsorshipId", sponsorshipId);
  return apiClient({
    method: ROUTES.UPDATE_SPONSORSHIP.METHOD,
    url: url,
    data: params,
  })
}

export async function addSponsorshiptype(params) {
  return apiClient({
    method: ROUTES.ADD_SPONSORSHIP.METHOD,
    url: ROUTES.ADD_SPONSORSHIP.URL,
    data: params,
  })
}

export async function copySponsorship(sponsorshipId) {
  let url = ROUTES.COPY_SPONSORSHIP.URL.replace(":sponsorshipId", sponsorshipId);
  return apiClient({
    method: ROUTES.COPY_SPONSORSHIP.METHOD,
    url: url,
  })
}

export async function deleteSponsorshiptype(sponsorshipId) {
  let url = ROUTES.DELETE_SPONSORSHIP.URL.replace(":sponsorshipId", sponsorshipId);
  return apiClient({
    method: ROUTES.DELETE_SPONSORSHIP.METHOD,
    url: url,
  })
}

export async function getAffiliateInvoices(affiliateId) {
  let url = ROUTES.FETCH_AFFILIATE_INVOICES.URL.replace(":affiliateId", affiliateId);
  return apiClient({
    method: ROUTES.FETCH_AFFILIATE_INVOICES.METHOD,
    url: url,
  })
}

export async function generateAffiliateInvoices(affiliateId, data) {
  let url = ROUTES.GENERATE_AFFILIATE_INVOICES.URL.replace(":affiliateId", affiliateId);
  return apiClient({
    method: ROUTES.GENERATE_AFFILIATE_INVOICES.METHOD,
    url: url,
    data: data
  })
}

export async function createEvents(data) {
  return apiClient({
    method: ROUTES.CREATE_EVENT.METHOD,
    url: ROUTES.CREATE_EVENT.URL,
    data: data
  })
}

export async function saveAffiliateChequeDetail(data) {
  return apiClient({
    method: ROUTES.SAVE_AFFILIATE_CHEQUE_DETAILS.METHOD,
    url: ROUTES.SAVE_AFFILIATE_CHEQUE_DETAILS.URL,
    data: data,
  })
}

export async function fetchAllCheques() {
  return apiClient({
    method: ROUTES.FETCH_ALL_CHEQUES.METHOD,
    url: ROUTES.FETCH_ALL_CHEQUES.URL,
  })
}

export async function changePaymentMethod(paymentId, data) {
  let url = ROUTES.CHANGE_PAYMENT_METHOD.URL.replace(":paymentId", paymentId);
  return apiClient({
    method: ROUTES.CHANGE_PAYMENT_METHOD.METHOD,
    url: url,
    data: data,
  })
}

export async function generateMemberInvoices(paymentId) {
  let url = ROUTES.GENERATE_MEMBER_OFFLINE_INVOICE.URL.replace(":paymentId", paymentId);
  return apiClient({
    method: ROUTES.GENERATE_MEMBER_OFFLINE_INVOICE.METHOD,
    url: url,
  })
}

export async function saveMemberChequeDetail(data) {
  return apiClient({
    method: ROUTES.SAVE_MEMBER_CHEQUE_DETAILS.METHOD,
    url: ROUTES.SAVE_MEMBER_CHEQUE_DETAILS.URL,
    data: data,
  })
}

export async function updateParticularCheque(chequeId, data) {
  const url = ROUTES.UPDATE_PARTICULAR_CHEQUE.URL.replace(":chequeId", chequeId)
  return apiClient({
    method: ROUTES.UPDATE_PARTICULAR_CHEQUE.METHOD,
    url: url,
    data: data
  })
}

export async function updateParticularMemberCheque(chequeId, data) {
  const url = ROUTES.UPDATE_PARTICULAR_MEMBER_CHEQUE.URL.replace(":chequeId", chequeId)
  return apiClient({
    method: ROUTES.UPDATE_PARTICULAR_MEMBER_CHEQUE.METHOD,
    url: url,
    data: data
  })
}

export async function fetchEvents(params) {
  return apiClient({
    method: ROUTES.FETCH_EVENT.METHOD,
    url: ROUTES.FETCH_EVENT.URL,
    params: params
  })
}
