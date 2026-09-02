// Central place for Givebutter identifiers. Fill these in once you've
// created a Givebutter account — see README > "Accepting payments" for the
// setup steps. Until accountId is set, DonateButton falls back to a plain
// in-page link instead of trying to load Givebutter's widget.
//
// Where to find these in the Givebutter dashboard:
//   accountId       Account Settings > General
//   donateCampaign  the campaign code for your general/recurring giving
//                   campaign (Donate & Monthly Giving on the Give page)
//   galaCampaign    the campaign code for the Founder's Gala event —
//                   ticket types and sponsorship tiers are configured as
//                   options *within* that one Givebutter campaign, not as
//                   separate campaigns per tier
export const givebutter = {
  accountId: '',
  donateCampaign: '',
  galaCampaign: '',
};
