import { useState } from "react";
import { useProfile } from "../context/ProfileContext";
import { sampleProfile } from "../data/sampleProfile";
import { motion } from "framer-motion";
import "./Compare.css";

export default function Compare() {
  const { compareList, addToCompare, removeFromCompare, clearCompare } = useProfile();
  const { achievements } = sampleProfile;
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (item) => {
    setSelectedItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      return exists 
        ? prev.filter(i => i.id !== item.id)
        : [...prev, item];
    });
  };

  const generateComparison = () => {
    if (selectedItems.length < 2) return null;

    const criteria = [
      { key: "category", label: "Category" },
      { key: "date", label: "Date" },
      { key: "technologies", label: "Technologies" },
      { key: "highlights", label: "Key Highlights" },
      { key: "verified", label: "Verified" }
    ];

    return (
      <motion.div className="comparison-table" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.table>
          <motion.thead>
            <motion.tr>
              <motion.th className="criterion-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                Criterion
              </motion.th>
              {selectedItems.map(item => (
                <motion.th key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: item.id * 0.01 }}>
                  {item.title}
                </motion.th>
              ))}
            </motion.tr>
          </motion.thead>
          <motion.tbody>
            {criteria.map(criterion => (
              <motion.tr key={criterion.key} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                <motion.td className="criterion-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  {criterion.label}
                </motion.td>
                {selectedItems.map(item => (
                  <motion.td key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: item.id * 0.01 }}>
                    {formatValue(item[criterion.key], criterion.key)}
                  </motion.td>
                ))}
              </motion.tr>
            ))}
          </motion.tbody>
        </motion.table>
      </motion.div>
    );
  };

  const formatValue = (value, key) => {
    if (!value) return "—";
    if (key === "date") return new Date(value).toLocaleDateString();
    if (key === "verified") return value ? "✓ Yes" : "No";
    if (Array.isArray(value)) return value.join(", ");
    return value;
  };

  const goalPresets = [
    { id: "interview", label: "Placement Interview", items: ["project-1", "project-4", "award-1"] },
    { id: "internship", label: "Internship Application", items: ["project-2", "project-6", "cert-1"] },
    { id: "hackathon", label: "Hackathon Portfolio", items: ["project-2", "project-9", "award-1"] }
  ];

  return (
    <motion.div className="compare-page" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1.25] }}>
      <motion.div className="page-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          Compare Lab
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          Select achievements to compare side-by-side
        </motion.p>
      </motion.div>

      <motion.div className="goal-presets" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          Quick Presets
        </motion.h3>
        <motion.div className="preset-buttons" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          {goalPresets.map(preset => (
            <motion.button
              key={preset.id}
              className="preset-btn"
              onClick={() => {
                const items = achievements.filter(a => preset.items.includes(a.id));
                setSelectedItems(items);
              }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {preset.label}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="items-selector" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          Select Items to Compare
        </motion.h3>
        <motion.div className="items-grid" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          {achievements.map(item => (
            <motion.div
              key={item.id}
              className={`item-card ${selectedItems.some(i => i.id === item.id) ? "selected" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: item.id * 0.005 }}
              onClick={() => toggleSelection(item)}
            >
              <motion.input
                type="checkbox"
                checked={selectedItems.some(i => i.id === item.id)}
                onChange={() => toggleSelection(item)}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, type: "spring" }}
              />
              <motion.span className="item-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                {item.title}
              </motion.span>
              <motion.span className="item-category" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                {item.category}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {selectedItems.length >= 2 && (
        <motion.div className="comparison-results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
          {generateComparison()}
        </motion.div>
      )}

      {selectedItems.length === 1 && (
        <motion.div className="compare-warning" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
          Select at least 2 items to compare
        </motion.div>
      )}
    </motion.div>
  );
}

export { Compare };