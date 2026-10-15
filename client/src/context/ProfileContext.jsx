import { createContext, useContext, useState, useMemo, useCallback } from "react";
import { sampleProfile, searchAchievements as searchFn, getStats as getStatsFn } from "../data/sampleProfile";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(["all"]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [compareList, setCompareList] = useState([]);

  const stats = useMemo(() => getStatsFn(), []);

  const filteredAchievements = useMemo(() => {
    const all = sampleProfile.achievements;
    const catFiltered = selectedCategories.includes("all") 
      ? all 
      : all.filter(a => selectedCategories.includes(a.category));
    
    const searchFiltered = searchQuery.trim()
      ? searchFn(searchQuery)
      : catFiltered;
    
    const skillFiltered = selectedSkills.length > 0
      ? searchFiltered.filter(a => 
          a.technologies?.some(t => selectedSkills.includes(t)) ||
          a.skills?.some(s => selectedSkills.includes(s))
        )
      : searchFiltered;

    return skillFiltered;
  }, [searchQuery, selectedCategories, selectedSkills]);

  const toggleCategory = useCallback((catId) => {
    if (catId === "all") {
      setSelectedCategories(["all"]);
      return;
    }
    setSelectedCategories(prev => {
      const filtered = prev.filter(c => c !== "all");
      return filtered.includes(catId)
        ? filtered.filter(c => c !== catId)
        : [...filtered, catId];
    });
  }, []);

  const toggleSkill = useCallback((skillName) => {
    setSelectedSkills(prev => 
      prev.includes(skillName)
        ? prev.filter(s => s !== skillName)
        : [...prev, skillName]
    );
  }, []);

  const addToCompare = useCallback((achievement) => {
    setCompareList(prev => 
      prev.some(a => a.id === achievement.id)
        ? prev
        : [...prev, achievement]
    );
  }, []);

  const removeFromCompare = useCallback((id) => {
    setCompareList(prev => prev.filter(a => a.id !== id));
  }, []);

  const clearCompare = useCallback(() => setCompareList([]), []);

  const clearFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedCategories(["all"]);
    setSelectedSkills([]);
  }, []);

  const value = {
    profile: sampleProfile,
    stats,
    searchQuery,
    setSearchQuery,
    selectedCategories,
    setSelectedCategories,
    selectedSkills,
    toggleCategory,
    toggleSkill,
    filteredAchievements,
    compareList,
    addToCompare,
    removeFromCompare,
    clearCompare
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within ProfileProvider");
  }
  return context;
}

export function useSearch() {
  const { searchQuery, setSearchQuery, filteredAchievements } = useProfile();
  return { searchQuery, setSearchQuery, filteredAchievements };
}

export function useComparison() {
  const { compareList, addToCompare, removeFromCompare, clearCompare } = useProfile();
  return { compareList, addToCompare, removeFromCompare, clearCompare };
}