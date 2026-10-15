import { useState, useMemo } from "react";
import { useProfile } from "../context/ProfileContext";
import { sampleProfile } from "../data/sampleProfile";
import { motion } from "framer-motion";
import AchievementCard from "../components/AchievementCard";
import "./Achievements.css";

export default function Achievements() {
  const { searchQuery, setSearchQuery, selectedCategories, toggleCategory, filteredAchievements, clearFilters: clearAllFilters } = useProfile();
  const { categories } = sampleProfile;
   
   const [sortBy, setSortBy] = useState("date");
   const [viewMode, setViewMode] = useState("grid");
   
   const sortedAchievements = useMemo(() => {
     return [...filteredAchievements].sort((a, b) => {
       if (sortBy === "date") return new Date(b.date) - new Date(a.date);
       if (sortBy === "title") return a.title.localeCompare(b.title);
       if (sortBy === "category") return a.category.localeCompare(b.category);
       return 0;
     });
   }, [filteredAchievements, sortBy]);
   
   const clearFilters = () => {
     clearAllFilters();
   };
   
   return (
     <motion.div className="achievements-page" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1.25] }}>
       <motion.div className="page-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
         <motion.div>
           <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
             Achievement Explorer
           </motion.h1>
           <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
             All projects, awards, and certifications
           </motion.p>
         </motion.div>
       </motion.div>
       
       <motion.div className="controls-bar" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
         <motion.div className="search-wrapper" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
           <motion.input
             type="search"
             placeholder="Search achievements..."
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             initial={{ scale: 0.9 }}
             animate={{ scale: 1 }}
             transition={{ duration: 0.3, type: "spring" }}
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
           />
         </motion.div>
         
         <motion.div className="filters-bar" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
           <motion.div className="category-filters" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
             {categories.map(cat => (
               <motion.button
                 key={cat.id}
                 className={`filter-btn ${selectedCategories.includes(cat.id) ? "active" : ""}`}
                 onClick={() => toggleCategory(cat.id)}
                 initial={{ scale: 0.9 }}
                 animate={{ scale: 1 }}
                 transition={{ duration: 0.3, type: "spring" }}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 {cat.label}
               </motion.button>
             ))}
           </motion.div>
           
           <motion.select value={sortBy} onChange={(e) => setSortBy(e.target.value)} initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3, type: "spring" }}>
             <motion.option value="date">Sort by Date</motion.option>
             <motion.option value="title">Sort by Title</motion.option>
             <motion.option value="category">Sort by Category</motion.option>
           </motion.select>
           
           <motion.div className="view-toggle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
             <motion.button 
               className={viewMode === "grid" ? "active" : ""}
               onClick={() => setViewMode("grid")}
               initial={{ scale: 0.9 }}
               animate={{ scale: 1 }}
               transition={{ duration: 0.3, type: "spring" }}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               Grid
             </motion.button>
             <motion.button 
               className={viewMode === "list" ? "active" : ""}
               onClick={() => setViewMode("list")}
               initial={{ scale: 0.9 }}
               animate={{ scale: 1 }}
               transition={{ duration: 0.3, type: "spring" }}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               List
             </motion.button>
           </motion.div>
         </motion.div>
       </motion.div>
       
       {sortedAchievements.length > 0 ? (
         <motion.div className={`achievements-grid ${viewMode}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
           {sortedAchievements.map(achievement => (
             <motion.div key={achievement.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: achievement.id * 0.01 }}>
               <AchievementCard key={achievement.id} achievement={achievement} />
             </motion.div>
           ))}
         </motion.div>
       ) : (
         <motion.div className="empty-state" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
           <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
             No achievements match your current filters
           </motion.p>
           <motion.button onClick={clearFilters} initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3, type: "spring" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
             Clear all filters
           </motion.button>
         </motion.div>
       )}
     </motion.div>
   );
}