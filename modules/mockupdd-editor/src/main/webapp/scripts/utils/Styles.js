/**
 * This enum has all the Twitter Bootstrap styles for the app.
 */

var Styles = {
  PRIMARY : "primary",
  INFO : "info",
  WARNING : "warning",
  DANGER : "danger",
  DEFAULT : "default",
  LINK : "link",
  SUCCESS : "success"
}
Styles.values = [ Styles.DANGER, Styles.DEFAULT, Styles.INFO, Styles.LINK, Styles.PRIMARY,
    Styles.SUCCESS, Styles.WARNING ];
Styles.panelValues = [ Styles.DANGER, Styles.DEFAULT, Styles.INFO, Styles.PRIMARY, Styles.SUCCESS,
    Styles.WARNING ];

if (Object.freeze) {
  Object.freeze(Styles);
}