const Accordion = () => {
      return (
            <div >
                  <div>
                        <h2 className="text-3xl text-center font-bold text-teal-700 mb-8">Our Accordion Session</h2>
                  </div>
                  <div className="text-center mb-12">
                        <div className="collapse bg-base-200 text-center">
                              <input type="radio" name="my-accordion-1" checked="checked" />
                              <div className="collapse-title text-xl font-medium">
                                    Methods of Dust Collection Tools:
                              </div>
                              <div className="collapse-content">
                                    <p>Filtration: Dust collection tools often use filters to trap dust particles. These filters can be made of various materials and are available in different levels of filtration efficiency.

                                          Cyclonic Separation: Cyclone separators create a cyclonic airflow to separate heavier particles from the air. This is particularly effective for larger, heavier dust and debris.

                                          Electrostatic Precipitation: Some systems use electrostatic fields to charge dust particles, making them adhere to collection plates or surfaces.</p>
                              </div>
                        </div>
                        <div className="collapse bg-base-200">
                              <input type="radio" name="my-accordion-1" />
                              <div className="collapse-title text-xl font-medium">
                                    Methods of Electricians Collection Tools:
                              </div>
                              <div className="collapse-content">
                                    <p>Testing and Measuring:

                                          Multimeter: Electricians use multimeters to measure voltage, current, and resistance. This tool helps diagnose electrical problems, check the continuity of wires, and verify the presence of electricity.
                                          Cutting and Stripping:

                                          Wire Strippers: Electricians use wire strippers to remove the insulation from electrical wires safely, exposing the conductive metal core.
                                          Cable Cutters: Cable cutters are employed to cut through larger cables and wires cleanly.</p>
                              </div>
                        </div>
                        <div className="collapse bg-base-200">
                              <input type="radio" name="my-accordion-1" />
                              <div className="collapse-title text-xl font-medium">
                                    Methods of Work Station Collection Tools:
                              </div>
                              <div className="collapse-content">
                                    <p>Workbench:

                                          Method: A workbench provides a stable surface for a variety of tasks. To use it, place your workpiece on the bench and secure it if necessary. Use clamps or vises to hold the workpiece in place while you work on it.
                                          Vise:

                                          Method: A vise is used to hold workpieces securely. Position the workpiece between the vise jaws and tighten the vise to grip the workpiece firmly. This provides stability and safety when working with hand tools.</p>
                              </div>
                        </div>
                  </div>
            </div>

      );
};

export default Accordion;

