/* Fills the official County NPDES Industrial/Commercial Inspection Form (BRP) from an inspection record. */
(function (root) {
  var F = {
    facilityId: 'Facility ID_ATqMrCn2ATiXACvVkIPCRQ',
    facilityName: 'Facility Name_HtP8Bb-f5FvR0J-XF3JqxA',
    inspectionId: 'Inspection ID_QDV*rM3BwBwK7tfzKBqkMQ',
    date: 'Inspection Date_pm83NgvEYQ236XkaBsq9*Q',
    inspector: 'Inspector_yfJdlxDZfvicVnU7cCbAZw',
    email: 'E-Mail Report_xprMbpg7e22-Bb9DwOlYIA',
    checklistComments: 'Checklist Comments_0sSbgscS7XmnaILWQHUcwQ',
    enforcement: 'Enforcement_27DQwmteEwKy1ULBlIlH2g',
    corrective: 'Corrective Actions_5h9QH8-QLkm3KwZ8E3kpyg',
    sic: 'SIC Code_WarVlmGjxZmfXEzmZX4Yjg',
    revisedSic: 'Revised SIC Code_pSrOsv2UQuiKhLyXL25avA',
    b1n: 'If No, list materials stored o_rZ9hOlGXWkCMf*gLfeyJ*w',
    b2n: 'If No, list materials stored o_ji16dKqqkuxnBrJJYWr98Q',
    b3n: 'If No, list materials stored o_zEwDm9hUasaqVC-cevCDuQ',
    b4n: 'If No, list materials stored o_XHoMKmXo21ymNcSRSIukcw',
    b5n: 'If No, list materials stored o_7F2C1*CB7skp7WR*qUw7uQ',
    b6n: 'If No, list materials stored o_mUYXUgXwDrpSk7o6xzspmA',
    b7n: 'If No, list materials stored o_ArpGPqlyNVJvhzEbZTL3hA'
  };
  var R = {
    facilityActive: 'Facility Active_iJ4-Subd04AazoP1YOm38w',
    facilityPermitted: 'Facility Permitted_gJYTh2i0X-vtE1IA66P8nA',
    swpppPresent: 'SWPPP Present_Pr5-DBTt0FM*IOcZT-jloA',
    recordsCurrent: 'Records are Current_nGZg752rHZiZOJJEJkCfPw',
    samplingData: 'Sampling Data Evaluation_KPcRs0y0LzcRy07gYx3EBQ',
    bmpsAcceptable: 'BMPs Acceptable_BPEE8cHB7XT4Ow7tCMZ1jA',
    goodHousekeeping: 'Good Housekeeping_S*4MiYlrtIcV9QcyGd7z8w',
    erosionPresent: 'Erosion Present_W7AFaz72RyXRxAYoHJ132A',
    washouts: 'Washout(s) are Present_e1RBqbUrJ1OncKJvaglJrA',
    downstreamErosion: 'Downstream Erosion Present_IVKuhIhnNqno-mEBvE7hCw',
    floatable: 'Floatable Present_uO*nQMlHAgr1OzuKoM4VRA',
    illicit: 'Illicit Discharge Present_YEFa5s-zVMsVOvZclGnt7A',
    nonStormwater: 'Non-Stormwater Discharges_KkIEzpT-AJZ*84*bULfsZQ',
    returnRequired: 'Return Inspection Required_enlP2kZkxlF0aL9Zl7otBA',
    reportProvided: 'Inspection Report Provided_*RDx9K*3a7DU5s*xGCfcBA',
    mandatory: 'Mandatory_ClN1geHgoDAN-18R4u3Cig',
    conditional: 'Conditional_s8LeZ7BtLMK**UXkmivYiw',
    pOil: 'Oil _ Grease_9aZaBdrKzFJ0iFhavUgYeg',
    pBacteria: 'Bacteria/Virus_5lmku7BHhZkATIDD7rofbQ',
    pMetals: 'Heavy Metals_jcnaRyOVwkYvCHyNKVSiKw',
    pNutrients: 'Nutrients_y-xdIA-AiNBgTlUOqPjlzg',
    pTrash: 'Trash/Debris_dYIbuEEfUi4QM-o-9fb1fA',
    pPesticides: 'Pesticides_hhSKbsa4rWH5*hv*0jytLg',
    pSediment: 'Sediment_ZIIrz3jSkyyHzs0cXI6Ueg',
    pOrganics: 'Organics_wi439f0qVAD*QSNj-rECbA',
    gSubject: 'Is the facility subject to CA _p*YqsUb73nfCre6-9T3Q5Q',
    gMandCond: 'If Yes, is the facility Mandat_AeEfn56zw43C7EVIqepmyg',
    gNec: 'If No, does the site have a _N_wLZ9mifgek4WO*FO3TqX-Q',
    gSwppp: 'Does the facility maintain a S_53MEhXQVsbaGJf4jf2mvbQ',
    gBmpsPerSwppp: 'Are all BMPs implemented per t_t98sT06RkX-vPY0SCGoV2A',
    gMonitoring: 'Does the facility maintain a S_SIUSv6noJMaSgl8XafKH0w',
    gSamples: 'Were storm water samples colle_X3cNwJc3ZvDpNxisR5-J4A',
    b1: 'Are BMPs implemented in outdoo_O8y3xnOTS4PyHxnarnaiDg',
    b2: 'Are BMPs implemented in outdoo_0gCMbRrcpm1hnLgqOqHdWQ',
    b3: 'Are facility vehicle and equip_rwv4oGmIfhBSjZizSjSbrQ',
    b4: 'Are the contents of the waste _Uw-j6202pTsvZOAFMXJF1w',
    b5: 'Are facility flow lines/inlets_5ymIXRgzkIPrp6gkdG0WPQ',
    b6: 'Are spill prevention BMPs prov_wU2IbSNixnEhrdjY9Dnewg',
    b7: 'Are adequate erosion preventio_NOQKQtneeqzyB5AZKG6KCA',
    compliance: 'Compliance Status_sgwqRx0i3TJKZ7d6juDiHg',
    enforcementAction: 'Enforcement Action_iVvC-0oN6fmXYOEHJmPeBg',
    priority: 'Inspection Priority_BeZUEhLO1nj*lsETJfgoGg',
    revisedPriority: 'Revised Inspection Priority_Y*8iR44ai-zG27CQ5muxPw'
  };

  // Largest font size (max 9pt, min 5pt) at which the wrapped text fits the box.
  function fitSize(font, text, w, h, multiline) {
    for (var s = multiline ? 8.5 : 9; s >= 5; s -= 0.25) {
      if (!multiline) { if (font.widthOfTextAtSize(text, s) <= w - 4) return s; continue; }
      var lines = 0;
      text.split('\n').forEach(function (para) {
        var line = '';
        para.split(/\s+/).forEach(function (word) {
          var t = line ? line + ' ' + word : word;
          if (font.widthOfTextAtSize(t, s) > w - 6 && line) { lines++; line = word; } else line = t;
        });
        lines++;
      });
      if (lines * s * 1.18 <= h - 4) return s;
    }
    return 5;
  }

  async function fill(PDFLib, templateBytes, rec) {
    var doc = await PDFLib.PDFDocument.load(templateBytes);
    var form = doc.getForm();
    var font = await doc.embedFont(PDFLib.StandardFonts.Helvetica);
    Object.keys(F).forEach(function (k) {
      var v = (rec[k] || '').toString().trim();
      var tf = form.getTextField(F[k]);
      tf.setText(v);
      if (v) {
        var r = tf.acroField.getWidgets()[0].getRectangle();
        tf.setFontSize(fitSize(font, v, r.width, r.height, tf.isMultiline()));
      }
    });
    Object.keys(R).forEach(function (k) {
      var g = form.getRadioGroup(R[k]);
      if (rec[k]) g.select(rec[k]); else g.clear();
    });
    form.updateFieldAppearances(font);
    return doc.save();
  }

  root.BRPForm = { fill: fill, TEXT: F, RADIO: R };
})(typeof window !== 'undefined' ? window : globalThis);
