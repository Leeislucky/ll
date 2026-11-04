// Shared renderer for essay pages and the combined Citation Page.

(function () {
    "use strict";

    const outcomeRoot = document.querySelector("[data-outcome]");

    if (outcomeRoot) {
        renderOutcome(outcomeRoot.dataset.outcome, outcomeRoot);
    }

    const citationRoot = document.querySelector("[data-citation-page]");

    if (citationRoot) {
        renderCitationPage(citationRoot);
    }


    // ---------- RENDER ESSAY PAGES ----------

    function renderOutcome(key, root) {

        const outcome = outcomeTexts[key];

        if (!outcome ||
            !Array.isArray(outcome.paragraphs) ||
            outcome.paragraphs.length === 0) {

            const message = document.createElement("p");

            message.className = "content-placeholder";

            message.textContent =
                "Essay content for this learning outcome has not been added yet.";

            root.appendChild(message);

            return;
        }


        // Essay title

        const title = document.createElement("h2");

        title.className = "essay-title";
        title.textContent = outcome.title;

        root.appendChild(title);


        // Essay paragraphs

        const paragraphs = document.createElement("div");

        paragraphs.className = "essay-paragraphs";

        outcome.paragraphs.forEach((paragraphText) => {

            const paragraph = document.createElement("p");

            paragraph.textContent = paragraphText;

            paragraphs.appendChild(paragraph);
        });

        root.appendChild(paragraphs);


        // Works Cited for this essay

        const citationGroup = citationGroups.find(
            (group) => group.key === key
        );

        if (citationGroup && citationGroup.entries.length > 0) {

            root.appendChild(
                createWorksCitedSection(citationGroup.entries)
            );
        }
    }


    // ---------- RENDER COMBINED CITATION PAGE ----------

    function renderCitationPage(root) {

        // AI Use Statement

        const aiHeading = document.createElement("h2");

        aiHeading.className = "citation-section-title";
        aiHeading.textContent = "AI Use Statement";

        root.appendChild(aiHeading);


        const statement = document.createElement("p");

        statement.className = "citation-intro";
        statement.textContent = aiToolAcknowledgment.statement;

        root.appendChild(statement);


        // Combined Works Cited

        const worksHeading = document.createElement("h2");

        worksHeading.className = "citation-section-title";
        worksHeading.textContent = "Works Cited";

        root.appendChild(worksHeading);


        // Collect all essay citations and the Grok citation.

        const allEntries = [
            aiToolAcknowledgment.citation
        ];

        citationGroups.forEach((group) => {
            allEntries.push(...group.entries);
        });


        // Alphabetical order by author.

        allEntries.sort((a, b) => {

            const authorOrder = a.author.localeCompare(
                b.author,
                "en",
                { sensitivity: "base" }
            );

            return authorOrder ||
                a.title.localeCompare(b.title, "en", {
                    sensitivity: "base"
                });
        });


        root.appendChild(
            createWorksCitedList(allEntries)
        );
    }


    // ---------- WORKS CITED SECTION ----------

    function createWorksCitedSection(entries) {

        const section = document.createElement("section");

        section.className = "works-cited-section";


        const heading = document.createElement("h3");

        heading.className = "works-cited-heading";
        heading.textContent = "Works Cited";

        section.appendChild(heading);


        section.appendChild(
            createWorksCitedList(entries)
        );

        return section;
    }


    // ---------- WORKS CITED LIST ----------

    function createWorksCitedList(entries) {

        const list = document.createElement("ol");

        list.className = "works-cited-list";


        const sortedEntries = [...entries].sort((a, b) => {

            const authorOrder = a.author.localeCompare(
                b.author,
                "en",
                { sensitivity: "base" }
            );

            return authorOrder ||
                a.title.localeCompare(b.title, "en", {
                    sensitivity: "base"
                });
        });


        sortedEntries.forEach((entry) => {

            const item = document.createElement("li");

            item.className = "citation-entry";

            item.appendChild(
                document.createTextNode(`${entry.author} `)
            );


            // Italicized titles

            if (entry.titleStyle === "italic") {

                const title = document.createElement("em");

                title.textContent = entry.title;

                item.appendChild(title);

                item.appendChild(
                    document.createTextNode(".")
                );

            } else {

                // Titles in quotation marks

                item.appendChild(
                    document.createTextNode("“")
                );

                item.appendChild(
                    document.createTextNode(entry.title)
                );

                item.appendChild(
                    document.createTextNode(".”")
                );
            }


            // Publication / website name

            if (entry.container) {

                item.appendChild(
                    document.createTextNode(" ")
                );

                const container = document.createElement("em");

                container.textContent = entry.container;

                item.appendChild(container);

                item.appendChild(
                    document.createTextNode(",")
                );
            }


            // Publication date and other details

            if (entry.details) {

                item.appendChild(
                    document.createTextNode(` ${entry.details}`)
                );
            }


            // Source URL

            if (entry.url) {

                item.appendChild(
                    document.createTextNode(", ")
                );

                item.appendChild(
                    createExternalLink(entry.url)
                );
            }


            item.appendChild(
                document.createTextNode(".")
            );

            list.appendChild(item);
        });

        return list;
    }


    // ---------- EXTERNAL LINKS ----------

    function createExternalLink(url) {

        const link = document.createElement("a");

        link.href = url;
        link.textContent = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        return link;
    }

})();
