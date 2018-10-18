---

title: Troubleshooting
order: 4

---

## Troubleshooting

If the Balena Fin does not appear in the Resin dashboard upon powering the device on, you may want to check the list below for potential issues.

- Check that the ResinOS image flashed to the Fin has the correct SSID and password for your WLAN network
  - A pattern of 4-blinks on the ACT status LED indicates that the Fin cannot connect to a network
- Ensure that the WLAN radio physical switch (mapping 33) is set to the OFF position if you are **not** using an external antenna
- Verify that the power supply can maintain a minimum of 6 V (ideally 1.5 A or above) when powering the device from the Phoenix (mapping 23) or Barrel Adapters (mapping 24)
   - If USB1 ON and USB2 ON Status LEDs (mapping 18 & 23) are not turned ON, it is an indicator that the power supply may be insufficient for powering the Fin
   - The board may still power on if a low current or voltage is supplied, however the peripherals such as the Ethernet may not function correctly.
