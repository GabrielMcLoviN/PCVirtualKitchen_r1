# notes

switchScene renders scene @ index of scenes and loads associated hotspot containers, holding functionality for:

1. Which scene is being called upon to load? (with hotspot.target in createLinkHotspots)
2. How many link hotspots to show
3. How many info hotspots to show

****
      *  issue:
          The createInfoHotspots function
          creates ALL modals for every scene
          and only hides them with CSS until the
          toggle() click event.

      *  solution:
          only load x hotspots based on x hotspots per scene
****
      *  issue:
          createInfoHotspots renders each
          individual modal's HTML nodes, and
          injects content into them

      *  solution:
          make ONE modal HTML structure - update innerHTML
          dynamically

        - scene function       : one modal constructor =>
                                 x # of infoHotspots

        - createInfoHotspots   : id of hotspotClicked  =>
                                 content of id
****
